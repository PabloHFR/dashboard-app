import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "@/components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2023-02-11T00:00:00.000Z",
      "2023-02-12T00:00:00.000Z",
      "2023-02-13T00:00:00.000Z",
      "2023-02-14T00:00:00.000Z",
      "2023-02-15T00:00:00.000Z",
      "2023-02-16T00:00:00.000Z",
      "2023-02-17T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 63, 124, 23] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            // pb="4"
          >
            <Text fontSize="lg" mb="4">
              Inscritos da Semana
            </Text>
            <Chart
              options={options as object}
              series={series}
              type="area"
              height={160}
              width="100%"
            />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
            </Text>
            <Chart
              options={options as object}
              series={series}
              type="area"
              height={160}
              width="100%"
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
