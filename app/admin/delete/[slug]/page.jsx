import DeleteProduct from "@/components/admin/DeleteProduct";
const DeletePage = ({ params }) => {
  const { slug } = params;
  return <DeleteProduct slug={slug} />;
};
export default DeletePage;
