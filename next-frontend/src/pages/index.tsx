import LandingPage from "@/LandingPage/page";
import LandingLayout from "@/layouts/LandingLayout"



const index = () => {
  
  return <LandingPage  />;
};
index.getLayout = function getLayout(page: React.ReactNode){
  return <LandingLayout>{page}</LandingLayout>
}

export default index;
