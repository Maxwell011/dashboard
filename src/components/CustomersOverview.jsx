import ProfileIcon from "@/svg/ProfileIcon";
import RightIcon from "@/svg/RightIcon";
import { Text, Box } from "@chakra-ui/react";

const CustomersOverview = () => {
  return (
    <>
      <section>
        <Box w='407px' h='157px' boxShadow='xl' p='6' rounded='lg' bg='white'>
          <Box display='flex' justifyContent='space-between' mb='15px'>
            <Box display='flex' gap={2} color='#191919'>
              <ProfileIcon />
              Customers Overview
            </Box>
            <Box display='flex'>
              <Text fontSize={12} color='#CBCBCB'>
                view all
              </Text>
              <RightIcon />
            </Box>
          </Box>
          <Box
            display='flex'
            gap={4}
            alignItems='center'
            justifyContent='center'
          >
            <Box
              w='88px'
              h='79px'
              boxShadow='md'
              p='6'
              rounded='md'
              bg='white'
              fontSize={24}
              justifyContent='center'
              alignItems='center'
              display='flex'
              flexDirection='column'
              border='1px solid #F5F5F5'
            >
              <Text fontWeight={600} color='#191919'>
                0
              </Text>
              <Text fontSize={14} color='#3D3D3D'>
                Total
              </Text>
            </Box>
            <Box
              w='88px'
              h='79px'
              boxShadow='md'
              p='6'
              rounded='md'
              bg='white'
              fontSize={24}
              justifyContent='center'
              alignItems='center'
              display='flex'
              flexDirection='column'
              border='1px solid #F5F5F5'
            >
              {" "}
              <Text fontWeight={600} color='#191919'>
                0
              </Text>
              <Text fontSize={14} color='#3D3D3D'>
                New
              </Text>
            </Box>
            <Box
              w='88px'
              h='79px'
              boxShadow='md'
              p='6'
              rounded='md'
              bg='white'
              fontSize={24}
              justifyContent='center'
              alignItems='center'
              display='flex'
              flexDirection='column'
              border='1px solid #F5F5F5'
            >
              <Text fontWeight={600} color='#191919'>
                0
              </Text>
              <Text fontSize={14} color='#3D3D3D'>
                Active
              </Text>
            </Box>
            <Box
              w='88px'
              h='79px'
              boxShadow='md'
              p='6'
              rounded='md'
              bg='white'
              fontSize={24}
              justifyContent='center'
              alignItems='center'
              display='flex'
              flexDirection='column'
              border='1px solid #F5F5F5'
            >
              <Text fontWeight={600} color='#191919'>
                0
              </Text>
              <Text fontSize={14} color='#3D3D3D'>
                Inactive
              </Text>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};
export default CustomersOverview;
