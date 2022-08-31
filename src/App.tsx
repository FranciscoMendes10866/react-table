import { Table, IColumnType } from "./components";

interface IData {
  fullName: string;
  role: string;
  tags: string[];
}

const columns: IColumnType<IData>[] = [
  {
    key: "fullName",
    title: "Full Name",
  },
  {
    key: "role",
    title: "Role",
  },
  {
    key: "tags",
    title: "Tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag, tagIndex) => (
          <code key={`tag-${tagIndex}`} style={{ marginLeft: tagIndex * 4 }}>
            {tag}
          </code>
        ))}
      </>
    ),
  },
];

const data: IData[] = [
  {
    fullName: "Francisco Mendes",
    role: "Full Stack",
    tags: ["dev", "blogger"],
  },
  {
    fullName: "Ricardo Malva",
    role: "Social Media Manager",
    tags: ["designer"],
  },
];

export const App = () => {
  return <Table data={data} columns={columns} />;
};
