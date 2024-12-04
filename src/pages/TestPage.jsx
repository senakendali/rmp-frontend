import LayoutRightSpace from "../components/layout/LayoutRightSpace";
import Timeline from "../components/Timeline";

const Content = () => {
  return <div> content</div>;
};

const TestPage = () => {
  return (
    <LayoutRightSpace content={<Content />}>
      <div className="w-full p-4 bg-white">
        <Timeline />
      </div>
    </LayoutRightSpace>
  );
};

export default TestPage;
