import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(({ name, icon }) => (
        <button
          className="category-btn"
          style={{
            background: name === selectedCategory && "#fc1503",
            color: "white",
          }}
          key={name}
          onClick={() => setSelectedCategory(name)}
        >
          <span
            style={{
              color: name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {icon}
          </span>
          <span style={{ opacity: name === selectedCategory ? "1" : "0.5" }}>
            {name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
