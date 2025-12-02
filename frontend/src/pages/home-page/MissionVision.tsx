import Mission from "../../components/informationHub/Mission";
import Vision from "../../components/informationHub/Vision";

const MissionVision = () => {
  return (
    <div className="px-20 gap-10">
      <section className="px-20 py-10 grid gap-5">
        <Mission />
        <Vision />
      </section>
    </div>
  );
};

export default MissionVision;
