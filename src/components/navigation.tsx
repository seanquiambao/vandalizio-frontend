import Button from "./ui/button";

const Navigation = () => {
  return (
    <nav className="flex justify-between bg-plum text-white py-4 px-2 sticky-0 text-2xl">
      <div>VANDALIZ.IO</div>
      <div className="flex flex-row gap-2">
        <Button variant="outlined" onClick={() => console.log("Hello")}>
          login
        </Button>
        <Button variant="invert" onClick={() => console.log("Hello")}>
          register
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
