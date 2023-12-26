import ImageIcon from "@/svg/ImageIcon";
import { Text, Box } from "@chakra-ui/react";
import RightIcon from "@/svg/RightIcon";
import { Heading } from "@chakra-ui/react";

const Balance = () => {
  return (
    <>
      <Box
        w="418px"
        h="287px"
        borderRadius="12"
        bg="#fff"
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          mb="8px"
          alignItems="center"
        >
          <Heading as="h1" color="#191919" fontSize={28}>
            ₦ 0
            <Heading as="span" color="#CBCBCB" fontSize={28}>
              .00
            </Heading>{" "}
          </Heading>
          <Box display="flex">
            <Text fontSize={12} color="#CBCBCB">
              view all
            </Text>
            <RightIcon />
          </Box>
        </Box>
        <Text color="#606060" fontSize={14} mb="35px">
          Total Outstanding Balance
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
              <Text fontSize={16} color="#FF6A6A">
                ₦ 0.00
              </Text>
              <Text fontSize={12} color="#606060">
                Outstanding Balance
              </Text>
            </Box>
          </Box>
        </Box>{" "}
      </Box>
    </>
  );
};
export default Balance;
