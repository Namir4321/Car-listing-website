import FormContainer from "@/components/form/formContainer";
import FormInput from "@/components/form/FormInput";
import React from "react";
import TagsInput from "@/components/Tags/TagsInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/ButtonProps";
import { postAddCar } from "@/utils/action";
import ImageInput from "@/components/form/ImageInput";
import { Label } from "@/components/ui/label";
const AddCarPage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Add Car</h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">Car Info</h3>
        <FormContainer action={postAddCar}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="title"
              type="text"
              label="Car Name (20 limit)"
              defaultValue="Porsche 911 GT3 RS"
            />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description (10-1000 Words)"
          />
          <div className="grid md:grid-cols-2 gap-8 mb-4">
           
            <ImageInput  />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="dealer"
              type="text"
              label="Dealer"
              defaultValue="BBT"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            {/* <ImageInput /> */}
            <TagsInput />
            {/* <ImageUpload/> */}
          </div>

          <SubmitButton text="Create Car" className="mt-5" btnsize="lg" />
        </FormContainer>
      </div>
    </section>
  );
};

export default AddCarPage;
