import JobLayout from "@/layouts/JobLayout";
import JobsSidebar from "@/components/JobsSidebar";
import JobsHeader from "@/components/JobsHeader";
import Footer from "@/components/Footer";
import JobSection from "@/components/JobSection";

const jobs = () => {
  return (
    <JobLayout>
      <JobsSidebar /> {/* Assuming JobsSidebar is a component */}
      <div className="jobs-container flex flex-col divide-y-2">
        <JobsHeader/>
        <JobSection/>
        <Footer/>
        </div>
      
    </JobLayout>
  );
};

export default jobs;
