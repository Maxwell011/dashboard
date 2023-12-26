import ImageIcon from "@/svg/ImageIcon";
import { Text, Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const TopSelling = () => {
  return (
    <>
      <Box
        w="350px"
        h="287px"
        borderRadius="12"
        bg="#fff"
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
      >
        <Text fontSize={16} fontWeight="extrabold" color="#12D8A0">
          Top Selling
        </Text>
        <Heading as="h1" color="#191919" fontSize={28} mt={1} mb={1}>
          ₦ 0
          <Heading as="span" color="#CBCBCB" fontSize={28}>
            .00
          </Heading>{" "}
        </Heading>
        <Text color="#606060" fontSize={14} fontWeight="normal" mb={2}>
          Total Sold
        </Text>
        <Box display="flex" alignItems="flex-start" gap={7}>
          <Box
            w="161px"
            h="155px"
            backgroundColor="#F5F5F5"
            justifyContent="center"
            alignItems="center"
            display="flex"
            borderRadius="12"
          >
            <ImageIcon width={100} height={100} />
          </Box>
          <Box display="flex" flexDirection="column" gap={7}>
            <Text color="#191919" fontSize={20} fontWeight={600}>
              None
            </Text>
            <Box>
              <Text fontSize={16} color="#CBCBCB">
                0
              </Text>
              <Text fontSize={12} color="#606060">
                Whole units sold
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default TopSelling;
