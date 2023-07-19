import './HomePage.css';
import Navbar from './NavBar';

const Home = () => {
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio. Ullamcorper eget nulla facilisi etiam. Risus pretium quam vulputate dignissim suspendisse. Mi bibendum neque egestas congue quisque egestas diam in. Quis auctor elit sed vulputate mi sit amet mauris. Quam quisque id diam vel quam elementum. Vitae ultricies leo integer malesuada nunc. Nam at lectus urna duis. Integer feugiat scelerisque varius morbi. Tortor posuere ac ut consequat semper viverra nam libero. Pretium vulputate sapien nec sagittis aliquam. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci.Fames ac turpis egestas sed. Fames ac turpis egestas sed tempus. Sed vulputate odio ut enim blandit. Vitae et leo duis ut diam quam nulla. Ullamcorper sit amet risus nullam eget felis. Velit ut tortor pretium viverra suspendisse. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.Ornare arcu odio ut sem nulla pharetra diam sit. Volutpat sed cras ornare arcu dui vivamus arcu. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.';
  const greeting = 'Welcome to our page!';

  return (
    <div>
      <Navbar />
      <main>
        <h3>{greeting}</h3>
        <div className="paragraph">
          <p>{description}</p>
          <br />
          <p>{description}</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
