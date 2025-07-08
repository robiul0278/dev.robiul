"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  X,
} from "lucide-react";
import { Label } from "../ui/label";
import { TFormProps } from "@/types/types";

const technologyOptions = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "RTK Query",
  "Tailwind CSS",
  "Framer motion",
  "GSAP",
  "Firebase",
  "Node.js",
  "Express.js",
  "Mongoose",
  "MongoDB",
  "Figma",
  "Git",
];

const CreateProjectForm = ({ onSubmit, form }: TFormProps) => {
  const [selectedTechnology, setSelectedTechnology] = useState<string[]>([]);

  const addTechnology = (tech: string) => {
    if (!selectedTechnology.includes(tech)) {
      const updated = [...selectedTechnology, tech];
      setSelectedTechnology(updated);
      form.setValue("technology", updated, { shouldValidate: true });
       form.clearErrors('technology');
    }
  };

  const removeTechnology = (tech: string) => {
    const updated = selectedTechnology.filter((t) => t !== tech);
    setSelectedTechnology(updated);
     form.clearErrors('technology');
    form.setValue("technology", updated, { shouldValidate: true });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card className="border rounded-lg overflow-hidden">
          <CardContent className="p-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="title">Project Title</Label>
                    <FormControl>
                      <Input id="title" placeholder="Your project title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Sub Title */}
              <FormField
                control={form.control}
                name="subTitle"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="subTitle">Sub Title</Label>
                    <FormControl>
                      <Input id="subTitle" placeholder="Project subtitle" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Image */}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="image">Image</Label>
                    <FormControl>
                      <Input id="image" placeholder="Project image URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Live Link */}
              <FormField
                control={form.control}
                name="liveLink"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="liveLink">Live Link</Label>
                    <FormControl>
                      <Input id="liveLink" placeholder="Live site URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Frontend Link */}
              <FormField
                control={form.control}
                name="frontend"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="frontend">Frontend Code</Label>
                    <FormControl>
                      <Input id="frontend" placeholder="Frontend repo URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Backend Link */}
              <FormField
                control={form.control}
                name="backend"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="backend">Backend Code</Label>
                    <FormControl>
                      <Input id="backend" placeholder="Backend repo URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Serial No. */}
              <FormField
                control={form.control}
                name="serial"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="serial">Project Serial No.</Label>
                    <FormControl>
                      <Input id="serial" type="number" placeholder="00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Technology */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Technology</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {technologyOptions.map((tech) => (
                  <Button
                    key={tech}
                    type="button"
                    variant={selectedTechnology.includes(tech) ? "default" : "outline"}
                    size="sm"
                    onClick={() => addTechnology(tech)}
                    className="text-left py-2 px-3"
                  >
                    {tech}
                  </Button>
                ))}
              </div>

              {selectedTechnology.length > 0 && (
                <div className="space-y-2">
                  <Label>Selected:</Label>
                  <div className="flex flex-wrap gap-2">
                    {selectedTechnology.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                      >
                        {tech}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeTechnology(tech)}
                          className="ml-1 h-4 w-4 p-0 hover:bg-blue-300 dark:hover:bg-blue-700 rounded-full"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              <FormMessage>{form.formState.errors.technology?.message}</FormMessage>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                size="sm"
                variant="outline"
                disabled={form.formState.isSubmitting}
                className="cursor-pointer"
              >
                {form.formState.isSubmitting ? "🚀 Creating..." : "📢 Create"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default CreateProjectForm;
