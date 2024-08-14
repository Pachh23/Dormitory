import { EditOutlined, } from "@ant-design/icons";
import { Link, } from "react-router-dom";
import { Button, Col, Divider, Row, Space } from "antd";
function Personal() {
 
  return (
    <>
      <Row>
        <Col span={12}>
          <h2>จัดการข้อมูลส่วนตัว</h2>
        </Col>
        <Col span={12} style={{ textAlign: "end", alignSelf: "center" }}>
          <Space>
            <Link to="/personal/change"> 
              <Button type="primary" icon={<EditOutlined />}style={{ backgroundColor: '#5273e0', borderColor: '#5273e0' }} // เปลี่ยนสีปุ่ม
              >
                เปลี่ยนแปลงข้อมูล
              </Button>
            </Link>
          </Space>
        </Col>
      </Row>
      <Divider />
      <div style={{ marginTop: 20 }}>
       
      </div>
    </>
  );
}
export default Personal;