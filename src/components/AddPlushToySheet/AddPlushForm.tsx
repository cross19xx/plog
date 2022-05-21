import { useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { PickerInstance } from 'react-native-woodpicker';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';

import Button from '_/components/Button';
import Input from '_/components/Input';
import CustomPicker from '_/components/Picker';
import useTheme from '_/hooks/useTheme';
import { History, PlushToy } from '_/types';
import { SPECIES_CATEGORIES } from '_/utils/constants';
import { useTypedDispatch } from '_/hooks/useRedux';
import { addHistory, addPlushToy } from '_/redux/actions';

type Props = {
  onPlushToyAdded: () => {};
};

type Form = {
  name: string;
  specie?: string;
  description?: string;
};

const INITIAL_VALUES: Form = {
  name: '',
  specie: '',
  description: '',
};

const SPECIES_LIST = SPECIES_CATEGORIES.map((specie) => ({ label: specie.name, value: specie.id }));

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Enter a cute name for your plush toy'),
});

const AddPlushForm: React.FC<Props> = ({ onPlushToyAdded }) => {
  const pickerRef = useRef<PickerInstance>(null);
  const [specie, setSpecie] = useState(SPECIES_LIST[0]);
  const dispatch = useTypedDispatch();

  const { colors } = useTheme();

  const autoOpenSpecie = () => {
    Keyboard.dismiss();
    setTimeout(() => pickerRef.current?.open(), 100);
  };

  const onSubmit = async (values: Form) => {
    Keyboard.dismiss();
    const plushToy: PlushToy = {
      id: `${uuid.v4()}-${Date.now()}`,
      name: values.name.trim(),
      dateCreated: Date.now(),
      description: (values.description || '').trim(),
      specie: specie.value,
    };

    const history: History = {
      activity: 'plushToyAdded',
      dateCreated: Date.now(),
      plushToyId: plushToy.id,
    };

    dispatch(addPlushToy(plushToy));
    dispatch(addHistory(history));

    onPlushToyAdded();
  };

  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: VALIDATION_SCHEMA,
  });

  return (
    <View style={styles.container}>
      <Input
        error={errors.name}
        label="Name"
        onChangeText={handleChange('name')}
        onSubmitEditing={autoOpenSpecie}
        placeholder="Enter the name of the plush toy"
        placeholderTextColor={colors.textSecondary}
        returnKeyType="next"
        type="default"
        value={values.name}
      />

      <CustomPicker
        ref={pickerRef}
        items={SPECIES_LIST}
        item={specie}
        onItemChange={setSpecie}
        label="Plush toy specie (tap to select)"
      />

      <Input
        error={errors.description}
        label="Description"
        lines={10}
        onChangeText={handleChange('description')}
        placeholder="Enter a brief description of the plush toy"
        placeholderTextColor={colors.textSecondary}
        type="default"
        value={values.description || ''}
        textAlignVertical="top"
        inputStyle={styles.descriptionInput}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={handleSubmit} text="Add plush toy" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  descriptionInput: {
    minHeight: 172,
    lineHeight: 20.8,
  },
  buttonContainer: {
    marginTop: 32,
  },
});

export default AddPlushForm;
