import MealsSearch from "../components/MealsSearch";

export const metadata = {
    title: "Meals",
    description: "Meals Page",
  };

const mealsPage = () => {
    return (
        <div className="w-[85%] mx-auto">
            <p className="font-bold text-4xl mt-24">Wellcome</p>
            <p className="text-gray-400">choose meals of you choice by searching</p>
            <MealsSearch></MealsSearch>
        </div>
    );
};

export default mealsPage;