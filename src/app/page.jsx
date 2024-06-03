import BusinessCard from "@/components/BusinessCard";

const Home = () => {
  return (
    <div className="flex h-[88.3vh] items-center justify-center">
      <BusinessCard
        text="Aldo's"
        imgSrc="https://img.freepik.com/premium-vector/burger-logo-vector-art-design_260747-240.jpg"
        id="aldos"
      />
      <BusinessCard
        text="Pablo's"
        imgSrc="https://static.vecteezy.com/system/resources/previews/005/285/094/original/pizza-logo-with-illustration-a-piece-of-pizza-free-vector.jpg"
        id="pablos"
      />
      <BusinessCard
        text="Sister's"
        imgSrc="https://th.bing.com/th/id/OIP.u8imt55t1pSi06FO5WxOsAHaHa?rs=1&pid=ImgDetMain"
        id="sisters"
      />
    </div>
  );
};

export default Home;
