import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/services/dashboardApi/BlogApi";
import { useToast } from "@/hooks/useToast"; // ✅ Toast hook import

type FormData = {
  title: string;
  author: string;
  category: string;
  description: string;
  image?: FileList;
};

function Blogs() {
  const queryClient = useQueryClient();
  const { showToast } = useToast(); // ✅ Toast function

  // Mutation for adding blog
  const mutation = useMutation({
    mutationFn: (formData: FormData) => {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("category", formData.category);
      data.append("description", formData.description);
      data.append("date", new Date().toLocaleString());
      if (formData.image && formData.image[0]) {
        data.append("image", formData.image[0]);
      }
      return api.post("/blogs", data, { headers: { "Content-Type": "multipart/form-data" } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] }); // ensures Support page gets updated
      showToast("Blog added successfully!", "success"); // ✅ Success toast
    },
    onError: (error: any) => {
      console.error("❌ Blog creation failed:", error);
      showToast(error.response?.data?.message || "Blog creation failed!", "error"); // ✅ Error toast
    },
  });

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    mutation.mutate(data, { onSuccess: () => reset() });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input {...register("title")} placeholder="Title" className="border p-2 rounded" />
        <input {...register("author")} placeholder="Author" className="border p-2 rounded" />
        <input type="file" {...register("image")} className="border p-2 rounded" />
        <input {...register("category")} placeholder="Category" className="border p-2 rounded" />
        <textarea {...register("description")} placeholder="Description" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Add Blog</button>
      </form>
    </div>
  );
}

export default Blogs;
