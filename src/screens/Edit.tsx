import { useNavigation, useRoute } from '@react-navigation/native';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';
import Button from '_/components/Button';

import Header from '_/components/Header';
import Input from '_/components/Input';
import CustomPicker from '_/components/Picker';
import { useTypedDispatch } from '_/hooks/useRedux';
import useTheme from '_/hooks/useTheme';
import { RootNavigationProp, RootRouteProp } from '_/navigation';
import { addHistory, modifyPlushToy } from '_/redux/actions';
import { SPECIES_CATEGORIES } from '_/utils/constants';

type Form = {
  name: string;
  specie?: string;
  description?: string;
};

const SPECIES_LIST = SPECIES_CATEGORIES.map((specie) => ({ label: specie.name, value: specie.id }));

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Enter a cute name for your plush toy'),
});

const Edit: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<RootNavigationProp<'Edit'>>();
  const { toy } = useRoute<RootRouteProp<'Edit'>>().params;

  const dispatch = useTypedDispatch();

  const defaultSpecie =
    SPECIES_LIST.find((specie) => specie.value === toy.specie) || SPECIES_LIST[0];

  const [specie, setSpecie] = useState(defaultSpecie);

  const onSubmit = (value: Form) => {
    const update = { ...value, specie: specie.value };
    dispatch(
      addHistory({ activity: 'plushToyModified', dateCreated: Date.now(), plushToyId: toy.id }),
    );
    dispatch(modifyPlushToy({ id: toy.id, update }));

    navigation.reset({
      index: 1,
      routes: [{ name: 'Dashboard' }, { name: 'Details', params: { toy: { ...toy, ...update } } }],
    });
  };

  const { errors, handleChange, handleSubmit, values } = useFormik<Form>({
    initialValues: {
      name: toy.name,
      description: toy.description,
    },
    onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: VALIDATION_SCHEMA,
  });

  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={[styles.container, { backgroundColor: colors.backgroundPrimary }]}>
      <SafeAreaView style={styles.safeAreaView}>
        <Header title="Details" navigation={navigation} />

        <View
          style={[
            styles.form,
            { backgroundColor: colors.backgroundSecondary, borderColor: colors.border },
          ]}>
          <Input
            error={errors.name}
            label="Name"
            onChangeText={handleChange('name')}
            placeholder="Enter the name of the plush toy"
            placeholderTextColor={colors.textSecondary}
            returnKeyType="next"
            type="default"
            value={values.name}
          />

          <CustomPicker
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
            <Button onPress={handleSubmit} text="Edit plush toy" />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeAreaView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  form: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
  },
  descriptionInput: {
    minHeight: 172,
    lineHeight: 20.8,
  },
  buttonContainer: {
    marginTop: 32,
  },
});

export default Edit;
