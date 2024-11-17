import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TagsInput = ({ defaultCarType, defaultCompany }) => {
  const name = "CarType";
  const company = "CarCompany";

  return (
    <div className="  grid sm:grid-cols-1 md:grid-cols-2">
      <div className="mb-2">
        <Select name={name} defaultValue={defaultCarType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Car Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Sedan">Sedan</SelectItem>
            <SelectItem value="HatchBack">HatchBack</SelectItem>
            <SelectItem value="Suv">Suv</SelectItem>
            <SelectItem value="Sport">Sport</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-2">
        <Select name={company} defaultValue={defaultCompany}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Car Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Porsche">Porsche</SelectItem>
            <SelectItem value="Ferrari">Ferrari</SelectItem>
            <SelectItem value="Pagani">Pagani</SelectItem>
            <SelectItem value="Koinesegg">Koinesegg</SelectItem>
            <SelectItem value="Buggati">Buggati</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TagsInput;
