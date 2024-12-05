import LayoutRightSpace from "../components/layout/LayoutRightSpace";
import Timeline from "../components/Timeline";

const Content = () => {
  return <div> content</div>;
};

const TestPage = () => {
  return (
    <LayoutRightSpace content={<Content />}>
      <div className="border-b border-gray-200 mb-4">
        <h1 className="text-2xl font-semibold text-indigo-900 mb-4">
          Log Test
        </h1>
      </div>
      <Timeline />
    </LayoutRightSpace>
  );
};

export default TestPage;
