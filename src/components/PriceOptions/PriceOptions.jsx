import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to cardio and weightlifting areas",
            "Unlimited use of gym equipment",
            "Locker room access",
            "Fitness assessment"
          ],
          "price": 60
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "All features of Basic Membership",
            "Access to group fitness classes",
            "Personal training sessions",
            "Sauna and steam room access"
          ],
          "price": 60
        },
        {
          "id": 3,
          "name": "Family Membership",
          "features": [
            "All features of Premium Membership",
            "Family access (up to 4 family members)",
            "Childcare services",
            "Nutrition consultation"
          ],
          "price": 60
        }
      ];

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;