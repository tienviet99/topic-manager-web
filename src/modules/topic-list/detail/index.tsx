import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ButtonConfirm from 'components/button-confirm';
import React from 'react';

export default function TopicDetailContainer() {
  return (
    <Box>
      <Box className="flex my-9">
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            Topic ID :
          </Typography>
          <Box className="ml-5">
            <Typography> T001 </Typography>
          </Box>
        </Box>
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">Teacher :</Typography>
          <Box className="ml-5">
            <Typography> Nguyen Van A</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="my-9 mx-3 text-left flex">
        <Typography className="text-gray-500">Name :</Typography>
        <Box className="ml-5">
          <Typography> Topic name 1</Typography>
        </Box>
      </Box>
      <Box className="flex my-9">
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            Start Date :
          </Typography>
          <Box className="ml-5">
            <Typography> 17/07/1999</Typography>
          </Box>
        </Box>
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            End Date :
          </Typography>
          <Box className="ml-5">
            <Typography> 17/07/2000</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="my-9 mx-3 text-left">
        <Typography className="text-gray-500">
          Description :
        </Typography>
        <Box className="m-2">
          <Typography>
            16Typh Mỗi ngày 1 câu chuyện yah Luôn mỉm cười và đối diện
            yah Chăm chỉ và cầu tiến Nhưng k quên cầu nguyện (pray)
            Mong cho mọi việc tốt hơn (bless) Mong tụi nhỏ đc chốt đơn
            (lên đơn) Mong 16 luôn giữ chất (dope) Còn cái tên thì mỗi
            ngày 1 lớn (16) Nên t vẫn cho đi mà k cần nhận lại Vẫn cứ
            nhẫn nại và sẵn sàng nhận sai Vẫn còn nghiện rap mà cũng
            chẳng cần cai Vẫn 1 chữ real từ trong cái thần thái Thắp 1
            nén ban thần tài Cuốn thêm điếu * dài (smoke) Nhắc bản
            thân sống chậm lại bình an cho những ng cầm tài Cầu cho
            gia đình luôn khoẻ mạnh (an toàn) Cầu cho dịch bệnh mau
            qua đi (đi) May mắn vì có em bên cạnh (love) Sống những
            ngày tháng không lãng phí (waste) Cầu cho gia đình luôn
            khoẻ mạnh (bình Cầu cho thien tai mau qua đi (đi) Vẫn luôn
            có anh em bên cạnh (gang) Sống cùng tuổi trẻ không lãng
            phí
          </Typography>
        </Box>
      </Box>
      <Box className="my-9 mx-3 text-left flex">
        <Typography className="text-gray-500">Link :</Typography>
        <Box className="ml-5 cursor-pointer">
          <Link
            href="https://www.youtube.com/watch?v=BAGJqKwXeEY"
            underline="hover"
            className="cursor-pointer"
          >
            https://www.youtube.com/watch?v=BAGJqKwXeEY
          </Link>
        </Box>
      </Box>
      <Box className="flex my-9 mx-3 text-left w-full">
        <Typography className="text-gray-500">Major: </Typography>
        <Box className="ml-5">
          <Typography> Cong nghe thong tin </Typography>
        </Box>
      </Box>

      <Box className="flex justify-end mt-24 mb-3 mr-2">
        <ButtonConfirm label="Register" type="submit" />
      </Box>
    </Box>
  );
}
