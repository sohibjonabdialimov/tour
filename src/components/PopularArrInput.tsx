import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PopularArrInputProps {
  values: string[];
  onChange: (values: string[]) => void;
}

export default function PopularArrInput({
  values,
  onChange,
}: PopularArrInputProps) {
  const [popularArr, setPopularArr] = useState<string[]>(values);
  const handleItemChange = (index: number, newValue: string) => {
    const updated = [...popularArr];
    updated[index] = newValue;
    setPopularArr(updated);
  };

  const handleAdd = () => {
    setPopularArr([...popularArr, ""]);
  };

  const handleRemove = (index: number) => {
    const updated = popularArr.filter((_, i) => i !== index);
    setPopularArr(updated);
  };

  return (
    <div className="space-y-2">
      <Label>Eng mashhur diqqatga sazovor joylar</Label>
      {popularArr.map((item, index) => (
        <div key={index} className="flex gap-2 items-center">
          <Input
            type="text"
            value={item}
            onChange={(e) => handleItemChange(index, e.target.value)}
          />
          <Button
            type="button"
            onClick={() => handleRemove(index)}
            variant="destructive"
          >
            O'chirish
          </Button>
        </div>
      ))}
      <div className="flex gap-2 items-center">
        <Button type="button" onClick={handleAdd}>
          + Joylar qo'shish
        </Button>
        <Button type="button" onClick={() => onChange(popularArr)}>
          Saqlash
        </Button>
      </div>
    </div>
  );
}
