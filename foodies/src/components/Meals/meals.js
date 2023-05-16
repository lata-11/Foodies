import AvailableMeals from "./AvailableMeans";
import MealSummary from "./mealsSummary";

import { Fragment } from 'react';


function Meals() {
    return (
        <Fragment>
            <MealSummary />
            <AvailableMeals />
        </Fragment>
    );
}

export default Meals;