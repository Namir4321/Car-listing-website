import { SubmitButton } from '@/components/form/ButtonProps';
import FormContainer from '@/components/form/formContainer';
import FormInput from '@/components/form/FormInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import TagsInput from '@/components/Tags/TagsInput';
import { fetchCarById, updateCarInfo } from '@/utils/action';
import React from 'react'
import ImageInput from '@/components/form/ImageInput';

const CarEdit = async({params}) => {
     const { id } = await params;
     if (!id) {
       return <p>Car ID not found.</p>;
     }
    const carDetails = await fetchCarById(id);
    if (!carDetails) {
      return <p>Car not found.</p>;
    }
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Update Car</h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">Update Car Info</h3>
        <FormContainer action={updateCarInfo}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="id"
              type="text"
              label="Car id (20 limit)"
              className="hidden"
              defaultValue={carDetails.id}
            />
            <FormInput
              name="title"
              type="text"
              label="Car Name (20 limit)"
              defaultValue={carDetails.title}
            />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description (10-1000 Words)"
            defaultValue={carDetails.description}
          />
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="dealer"
              type="text"
              label="Dealer"
              defaultValue={carDetails.dealer}
            />
          </div>
            <ImageInput defaultValue={carDetails.images}/>
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <TagsInput
              defaultCarType={carDetails.CarType}
              defaultCompany={carDetails.CarCompany}
            />
          </div>
          <SubmitButton text="Update Car" className="mt-5" btnsize="lg" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CarEdit
