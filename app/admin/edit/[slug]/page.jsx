import CreateForm from "@/components/admin/CreateForm";
const EditPage = ({ params }) => {
  const { slug } = params;
  return <CreateForm slug={slug} />;
};
export default EditPage;
