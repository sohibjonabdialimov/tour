import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import PopularArrInput from "@/components/PopularArrInput";
import { toast } from "@/hooks/use-toast";

export default function CreateCityForm() {
  const [formData, setFormData] = useState({
    cityName: "",
    desc: "",
    bg: "",
    heroTitle: "",
    heroDesc: "",
    popularDesc: "",
    videoUrl: "",
    tempDesc: "",
    giftDesc: "",
    kitchenDesc: "",
    popularArr: [] as string[],
    historyDesc: "",
    latitude: "",
    longitude: "",
  });

  const [files, setFiles] = useState({
    heroImg: null as File | null,
    images: [] as File[],
    giftImages: [] as File[],
    kitchenImages: [] as File[],
  });

  const handlePopularArrChange = (arr: string[]) => {
    setFormData((prev) => ({ ...prev, arr }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof files
  ) => {
    const inputFiles = e.target.files;
    if (!inputFiles) return;

    if (field === "heroImg") {
      setFiles((prev) => ({ ...prev, heroImg: inputFiles[0] }));
    } else {
      setFiles((prev) => ({ ...prev, [field]: Array.from(inputFiles) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => data.append(key, item));
      } else {
        data.append(key, value);
      }
    });

    data.append("popularArr", JSON.stringify(formData.popularArr));

    if (files.heroImg) data.append("heroImg", files.heroImg);
    files.images.forEach((file) => data.append("images", file));
    files.giftImages.forEach((file) => data.append("giftImages", file));
    files.kitchenImages.forEach((file) => data.append("kitchenImages", file));

    try {
      const res = await axios.post("http://localhost:4000/api/cities", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // alert("City created successfully!");
      toast({
        title: "Shahar muvaffaqiyatli yaratildi!",
        description: "Shahar muvaffaqiyatli yaratildi!",
      });
      console.log(res.data);
    } catch (error: unknown) {
      console.error(error);
      toast({
        title: "Shahar yaratishda xatolik!",
        description: "Shahar yaratishda xatolik: " + (error as Error).message,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Shahar yaratish</h2>

      {[
        { label: "Shahar nomi", name: "cityName" },
        { label: "Tavsif", name: "desc" },
        { label: "Fon rasm URL", name: "bg" },
        { label: "Asosiy sarlavha", name: "heroTitle" },
        { label: "Asosiy tavsif", name: "heroDesc" },
        { label: "Mashhur joylar tavsifi", name: "popularDesc" },
        { label: "Video URL", name: "videoUrl" },
        { label: "Iqlim tavsifi", name: "tempDesc" },
        { label: "Do'kondagi maxsulotlar tavsifi", name: "giftDesc" },
        { label: "Mashhur taomlar tavsifi", name: "kitchenDesc" },
        { label: "Tarix tavsifi", name: "historyDesc" },
        { label: "Latitude", name: "latitude" },
        { label: "Longitude", name: "longitude" },
      ].map((field, idx) => (
        <div key={idx}>
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.name.includes("Desc") ? (
            <Textarea
              name={field.name}
              value={
                (formData as unknown as Record<string, string>)[field.name]
              }
              onChange={handleChange}
              className="mt-1"
            />
          ) : (
            <Input
              type="text"
              name={field.name}
              value={
                (formData as unknown as Record<string, string>)[field.name]
              }
              onChange={handleChange}
              className="mt-1"
            />
          )}
        </div>
      ))}
      <PopularArrInput
        values={formData.popularArr}
        onChange={handlePopularArrChange}
      />
      {/* File inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Asosiy rasm (1 ta rasm)</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "heroImg")}
          />
        </div>
        <div>
          <Label>Shahar rasm (ko‘p rasm)</Label>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, "images")}
          />
        </div>
        <div>
          <Label>Do'kondagi maxsulotlar rasm (ko‘p rasm)</Label>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, "giftImages")}
          />
        </div>
        <div>
          <Label>Mashhur taomlar rasm (ko‘p rasm)</Label>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, "kitchenImages")}
          />
        </div>
      </div>

      <Button type="submit" className="w-full mt-6">
        Shahar yaratish
      </Button>
    </form>
  );
}
