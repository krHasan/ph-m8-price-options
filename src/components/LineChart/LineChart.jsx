import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const marks = [
        { "id": 1, "name": "Alice", "math": 85, "physics": 75, "chemistry": 92 },
        { "id": 2, "name": "Bob", "math": 78, "physics": 82, "chemistry": 89 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 88, "chemistry": 94 },
        { "id": 4, "name": "David", "math": 88, "physics": 90, "chemistry": 86 },
        { "id": 5, "name": "Eva", "math": 76, "physics": 70, "chemistry": 78 },
        { "id": 6, "name": "Frank", "math": 95, "physics": 85, "chemistry": 92 },
        { "id": 7, "name": "Grace", "math": 89, "physics": 78, "chemistry": 85 },
        { "id": 8, "name": "Helen", "math": 72, "physics": 68, "chemistry": 74 },
        { "id": 9, "name": "Ian", "math": 93, "physics": 91, "chemistry": 96 },
        { "id": 10, "name": "Jack", "math": 84, "physics": 76, "chemistry": 88 }
      ]

    return (
        <div>
                <LChart width={800} height={400} data={marks}>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Line dataKey="math" stroke='red'/>
                    <Line dataKey="physics" stroke='green'/>
                    <Line dataKey="chemistry" stroke='blue'/>
                </LChart>
        </div>
    );
};

export default LineChart;