import "@fontsource/anek-telugu";
import { styled } from "@stitches/react";

import { Table, IColumnType } from "./components";

interface IData {
  fullName: string;
  role: string;
  tags: string[];
}

const Span = styled("span", {
  background: "#596b7e",
  color: "white",
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 99999,
});

const columns: IColumnType<IData>[] = [
  {
    key: "fullName",
    title: "Full Name",
    width: 200,
  },
  {
    key: "role",
    title: "Role",
    width: 200,
  },
  {
    key: "tags",
    title: "Tags",
    width: 200,
    render: (_, { tags }) => (
      <>
        {tags.map((tag, tagIndex) => (
          <Span key={`tag-${tagIndex}`} style={{ marginLeft: tagIndex * 4 }}>
            {tag}
          </Span>
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
    tags: ["designer", "photographer"],
  },
];

export const App = () => {
  return <Table data={data} columns={columns} />;
};
