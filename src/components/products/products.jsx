import { Box, Button, Flex, Text } from "@mantine/core";
import React from "react";
import Slider from "@mui/material/Slider";

function Products() {
  const [range, setRange] = React.useState([5, 30]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <Box w={"100%"} h={"150vh"}>
      <Flex justify={"space-between"}>
        <Box w={"25%"} h={"150vh"} bg={"#FBFBFB"}>
          <Box pt={14}>
            <Text pl={30} c={"#3D3D3D"} fz={18} fw={700}>
              Categories
            </Text>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              pt={20}
            >
              <Flex
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#46A358"} fz={17} fw={700}>
                  House Plants
                </Text>
                <Text c={"#46A358"} fz={17} fw={700}>
                  (33)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Potter Plants
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (12)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Seeds
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (65)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Small Plants
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (39)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Big Plants
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (23)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Succulents
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (17)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Trerrariums
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (19)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Gardening
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (13)
                </Text>
              </Flex>
              <Flex
                pt={25}
                ta={"center"}
                align={"center"}
                justify={"space-between"}
                w={220}
              >
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  Accessories
                </Text>
                <Text c={"#3D3D3D"} fz={17} fw={400}>
                  (18)
                </Text>
              </Flex>
            </Flex>
            <Box pt={55}>
              <Text pl={30} c={"#3D3D3D"} fz={18} fw={700}>
                Price Range
              </Text>
              <Flex
                direction={"column"}
                style={{
                  width: "16rem",
                  paddingTop: "10px",
                  paddingLeft: "50px",
                }}
              >
                <Slider
                  value={range}
                  onChange={handleChanges}
                  valueLabelDisplay="auto"
                />
                <Flex pt={5} align={"center"}>
                  <Text c={"#3D3D3D"} fz={19} fw={400}>
                    Price:
                  </Text>
                  <Text c={"#46A358"} fz={19} fw={700} pl={5}>
                    ${range[0]} - ${range[1]}
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Button
              mt={16}
              ml={30}
              w={90}
              h={35}
              variant="filled"
              color="#46A358"
            >
              Filter
            </Button>
            <Box mt={55}>
              <Text pl={30} c={"#3D3D3D"} fz={18} fw={700}>
                Size
              </Text>
              <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                pt={20}
              >
                <Flex
                  ta={"center"}
                  align={"center"}
                  justify={"space-between"}
                  w={220}
                >
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    Small
                  </Text>
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    (98)
                  </Text>
                </Flex>
                <Flex
                  pt={25}
                  ta={"center"}
                  align={"center"}
                  justify={"space-between"}
                  w={220}
                >
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    Medium
                  </Text>
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    (86)
                  </Text>
                </Flex>
                <Flex
                  pt={25}
                  ta={"center"}
                  align={"center"}
                  justify={"space-between"}
                  w={220}
                >
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    Large
                  </Text>
                  <Text c={"#3D3D3D"} fz={17} fw={400}>
                    (78)
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box w={"70%"} h={"100vh"} bg={"black"}></Box>
      </Flex>
    </Box>
  );
}

export default Products;
