import Card from "./Card";

export const CardGrid = ({ features = [] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {features.map((item) => (
            <Card
                key={item.id}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
            />
            ))}
        </div>
    );
};

export default CardGrid;