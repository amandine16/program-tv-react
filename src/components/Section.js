import data from "../data/data.json";

const Section = () => {
  console.log(data);
  return (
    <div className="container">
      {data.map(
        ({ image, time, title, duration, direct, type, isUnseen }, index) => {
          return (
            <div className="section">
              <div>
                <p className="time">{time}</p>
              </div>

              <img src={image} alt={title} />

              <div className="description">
                <h2>{title}</h2>
                <p>{type}</p>
                <div className="infos">
                  <p>{duration}</p>
                  <p>{direct === true ? "• Direct" : ""}</p>
                  <p>{isUnseen === true ? "• Inédit" : ""}</p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
export default Section;
