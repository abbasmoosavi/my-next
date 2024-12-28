import AdminPostList from "@/components/admin/admin-post-list";
import NewPostForm from "@/components/admin/new-post-form";
import Container from "@/components/ui/container";

const Admin = () => {
  return (
    <div>
      <Container className='mt-8 flex flex-col gap-x-10 md:flex-row'>
        <div className='w-full p-2'>
          <NewPostForm />
        </div>
        <div className='my-5 block border-b shadow-md md:hidden'></div>
        <div className='w-full p-2 md:h-96 md:overflow-y-auto'>
          <AdminPostList />
        </div>
      </Container>
    </div>
  );
};
export default Admin;
