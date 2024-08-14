import { Space, Button, Col, Row, Divider, Form, Input, Card, message, DatePicker, InputNumber, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { UsersInterface } from "../../../interfaces/IUser";
import { ChangeUser } from "../../../services/https";
import { useNavigate, Link } from "react-router-dom";

function PersonalChange() {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values: UsersInterface) => {
        try {
            const res = await ChangeUser(values);

            if (res.status === 201) {
                messageApi.open({
                    type: "success",
                    content: res.data.message,
                });
                setTimeout(() => navigate("/personal"), 2000);
            } else {
                messageApi.open({
                    type: "error",
                    content: res.data.error,
                });
            }
        } catch (error) {
            messageApi.open({
                type: "error",
                content: "An unexpected error occurred.",
            });
        }
    };
    return (
        <div>
            {contextHolder}
                <h2>เปลี่ยนแปลงข้อมูลส่วนตัว</h2>
                <Card>
                  <Form 
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 24 }}
                        name="basic"
                        layout="horizontal"
                        onFinish={onFinish}
                        autoComplete="off"
                        style={{ maxWidth: 1000 }}
                  >
                  <h4 style={{ marginTop: -10, marginBottom: -10,color: '#5273e0' }}>1. ข้อมูลส่วนตัวนักศึกษา</h4>
                  <Divider/>
                        <Row gutter={[14, 0]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="ชื่อเล่น"
                                    name="first_name"
                                    rules={[{ required: true, message: "กรุณากรอกชื่อ !" }]}
                                > 
                                <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="วัน/เดือน/ปีเกิด"
                                    name="birthday"
                                    rules={[{ required: true, message: "กรุณาเลือกวัน/เดือน/ปี เกิด !" }]}
                                >
                                    <DatePicker style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="รหัสบัตรประชาชน"
                                    name="last_name"
                                    rules={[{ required: true, message: "กรุณากรอกรหัสบัตรประชาชน !" },
                                      { pattern: /^[0-9]{13}$/, message: "กรุณากรอกรหัสบัตรประชาชนที่ถูกต้อง (13 หลัก) !" }
                                    ]}
                                >
                                  <Input maxLength={13} placeholder="กรอกรหัสบัตรประชาชน" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="หมายเลขโทรศัพท์มือถือ"
                                    name="email"
                                    rules={[
                                        { required: true, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ !" },
                                        { pattern: /^[0-9]{10}$/, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ (10 หลัก) !" }
                                    ]}
                                >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="สัญชาติ"
                                    name="password"
                                    rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน !" }]}
                                >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="เชื้อชาติ"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกเชื้อชาติ !" }]}
                                >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="ศาสนา"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกศาสนา !" }]}
                                >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="กลุ่มเลือด"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกกลุ่มเลือด !" }]}
                                >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="โรคประจำตัว(ถ้ามี)"
                                    name="age"
                                >
                                  <Input />
                                </Form.Item>
                            </Col>
                  <Divider />
                  <h4 style={{ marginTop: -10, marginBottom: -10,color: '#5273e0' }}>2. ที่อยู่ปัจจุบัน(ตามทะเบียนบ้าน)</h4>
                  <Divider />
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="บ้านเลขที่"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกบ้านเลขที่ !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="หมู่ที่"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกบ้านเลขที่ !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="ชื่อหมู่บ้าน"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกชื่อหมู่บ้าน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="ซอย"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกซอย !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="ถนน"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="ตำบล/แขวง"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="อำเภอ/เขต"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="จังหวัด"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="รหัสไปรษณีย์"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                    <Divider />
                    <h4 style={{ marginTop: -10, marginBottom: -10,color: '#5273e0' }}>3. เกี่ยวกับครอบครัว</h4>
                    <Divider />
                      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="3.1 ชื่อ/สกุลบิดา"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="3.2 ชื่อ/สกุลมารดา"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="อาชีพ"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="อาชีพ"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="หมายเลขโทรศัพท์มือถือ"
                                    name="e"
                                    rules={[
                                        { required: true, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ !" },
                                        { pattern: /^[0-9]{10}$/, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ (10 หลัก) !" }
                                    ]}
                                >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="หมายเลขโทรศัพท์มือถือ"
                                    name="email"
                                    rules={[
                                        { required: true, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ !" },
                                        { pattern: /^[0-9]{10}$/, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ (10 หลัก) !" }
                                    ]}
                                >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                label="3.3 สถานภาพครอบครัว"
                                name="gender_id"
                                rules={[
                                    {
                                    required: true,
                                    message: "กรุณาเลือกสถานภาพครอบครัว !",
                                    },
                                ]}
                                >
                                <Select
                                    defaultValue=""
                                    style={{ width: "100%" }}
                                    options={[
                                    { value: "", label: "กรุณาเลือกสถานภาพครอบครัว", disabled: true },
                                    { value: 1, label: "อยู่ด้วยกัน" },
                                    { value: 2, label: "แยกกันอยู่" },
                                    { value: 3, label: "อื่นๆ (พ่อหรือแม่เสียชีวิต)" },
                                    ]}
                                />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                label="3.4 ผู้ปกครอง"
                                name="gende_id"
                                rules={[
                                    {
                                    required: true,
                                    message: "กรุณาเลือกผู้ปกครอง !",
                                    },
                                ]}
                                >
                                <Select
                                    defaultValue=""
                                    style={{ width: "100%" }}
                                    options={[
                                    { value: "", label: "กรุณาเลือกผู้ปกครอง", disabled: true },
                                    { value: 1, label: "มารดา" },
                                    { value: 2, label: "บิดา" },
                                    { value: 3, label: "อื่นๆ (ระบุ)" },
                                    ]}
                                />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="หรือผู้ปกครอง ชื่อ/สกุล"
                                    name="age"
                                    rules={[{message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="เกี่ยวข้องเป็น"
                                    name="age"
                                    rules={[{message: "กรุณากรอกถนน !"}]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="อาชีพ"
                                    name="age"
                                    rules={[{message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="หมายเลขโทรศัพท์มือถือ"
                                    name="e"
                                    rules={[
                                        { message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ !" },
                                        { pattern: /^[0-9]{10}$/, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ (10 หลัก) !" }
                                    ]}
                                >
                                  <Input />
                                </Form.Item>
                            </Col>
                    <Divider />
                    <h4 style={{ marginTop: -10, marginBottom: -10,color: '#5273e0' }}>4. ข้อมูลอื่นๆ</h4>
                    <Divider />
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="สำเร็จการศึกษาขั้นสุดท้ายจากโรงเรียน"
                                    name="age"
                                    rules={[{ required: true, message: "กรุณากรอกชื่อโรงเรียน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                        </Col>
                        <Col></Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                            <Form.Item
                            label="เมื่อปี พ.ศ."
                            name="age"
                            rules={[
                                {
                                required: true,
                                message: "กรุณากรอก พ.ศ.!",
                                },
                            ]}
                            >
                            <InputNumber
                                min={2560}
                                max={2567}
                                defaultValue={2564}
                                style={{ width: "100%" }}
                            />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                            <Form.Item
                            label="GPAX"
                            name="gpax"
                            rules={[
                                {
                                required: true,
                                message: "กรุณากรอก gpax!",
                                },
                            ]}
                            >
                            <InputNumber
                                min={0.00}
                                max={4.00}
                                step={0.01} // เพิ่มทีละ 0.1
                                defaultValue={0.00}
                                style={{ width: "100%" }}
                            />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="พาหนะส่วนตัวที่ใช้"
                                    name="age"
                                    rules={[{message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="สี"
                                    name="age"
                                    rules={[{message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="หมายเลขทะเบียน"
                                    name="e"
                                    rules={[{ message: "กรุณากรอกหมายเลขทะเบียน !" }]}
                                >
                                  <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="วันครบกำหนดเสียภาษี"
                                    name="birthday"
                                    rules={[{message: "กรุณาเลือกวันครบกำหนดเสียภาษี !" }]}
                                >
                                    <DatePicker style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="จังหวัด"
                                    name="province"
                                    rules={[{message: "กรุณากรอกถนน !" },{
                                        pattern: /^[ก-ฮA-Za-z\s]{1,50}$/, // ตรวจสอบให้แน่ใจว่าเป็นตัวอักษรภาษาไทยหรือภาษาอังกฤษ และมีความยาวไม่เกิน 50 ตัวอักษร
                                        message: "กรุณากรอกชื่อจังหวัดที่ถูกต้อง (ใช้ตัวอักษรไทยหรืออังกฤษเท่านั้น) !",
                                    },]}
                                    >
                                  <Input />
                                </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                label="ใบขับขี่"
                                name="gende_id"
                                rules={[
                                    {
                                    message: "กรุณาเลือกใบขับขี่ !",
                                    },
                                ]}
                                >
                                <Select
                                    defaultValue=""
                                    style={{ width: "100%" }}
                                    options={[
                                    { value: "", label: "กรุณาเลือกใบขับขี่", disabled: true },
                                    { value: 1, label: "มี" },
                                    { value: 2, label: "ไม่มี" },
                                    ]}
                                />
                                </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="ประเภท (ถ้ามี)"
                                    name="age"
                                    rules={[{message: "กรุณากรอกถนน !" }]}
                                    >
                                  <Input />
                                </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <Form.Item
                                    label="วันบัตรหมดอายุ"
                                    name="birthday"
                                    rules={[{message: "กรุณาเลือกวันบัตรหมดอายุ !" }]}
                                >
                                    <DatePicker style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                      </Row>
                        <Row justify="end">
                            <Col style={{ marginTop: "40px" }}>
                                <Form.Item>
                                    <Space>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            icon={<EditOutlined />}
                                            style={{ backgroundColor: '#5273e0', borderColor: '#5273e0' }}
                                            >
                                            อัปเดตข้อมูล
                                        </Button>
                                        <Link to="/personal">
                                            <Button htmlType="button" style={{ marginRight: "0px" }}>
                                                ปิด
                                            </Button>
                                        </Link>
                                    </Space>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
        </div>
    );
}

export default PersonalChange;
