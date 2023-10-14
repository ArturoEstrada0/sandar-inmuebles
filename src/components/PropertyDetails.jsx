import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Row, Col, Button, Input, Typography, Form, Avatar } from "antd";
import { PhoneOutlined, SendOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import { housesData } from "../data";
import "./PropertyDetails.css";

const { Title, Text } = Typography;

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="property-details">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={16}>
          <Title level={2} className="property-title">
            {house.name}
          </Title>
          <Text className="property-address">{house.address}</Text>
          <div className="details">
            <Text type="secondary" className="property-type">
              {house.type}
            </Text>
            <Text type="secondary" className="property-country">
              {house.country}
            </Text>
            <Title level={3} className="property-price">
              ${house.price}
            </Title>
          </div>
          <div className="image">
            <img src={house.imageLg} alt="" />
          </div>
          <Text className="property-description">{house.description}</Text>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <div className="contact-buttons">
            <Button
              type="primary"
              icon={<SendOutlined />}
              size="large"
              block
              onClick={() => window.location.href = `mailto:${house.agent.email}`}
            >
              Contactar al Agente
            </Button>
            <Button
              type="default"
              icon={<PhoneOutlined />}
              size="large"
              block
              onClick={() => window.location.href = `tel:${house.agent.phone}`}
            >
              Llamar al Agente
            </Button>
          </div>
          <div className="agent">
            <div className="agent-image">
              <Avatar size={64} src={house.agent.image} alt="Agent" />
            </div>
            <div className="agent-details">
              <Title level={4} className="agent-name">
                {house.agent.name}
              </Title>
              <Link to="/" className="agent-link">
                Ver Listados
              </Link>
            </div>
          </div>
          <Form
            onFinish={onFinish}
            layout="vertical"
            name="property-inquiry"
            initialValues={{ message: `Hola, estoy interesado en ${house.name}` }}
          >
            <div className="form-container">
              <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true, message: "Por favor, ingrese su nombre" }]}
              >
                <Input placeholder="Nombre" />
              </Form.Item>
              <Form.Item
                label="Correo Electrónico"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingrese su correo electrónico",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Correo Electrónico" />
              </Form.Item>
              <Form.Item
                label="Celular"
                name="phone"
                rules={[{ required: true, message: "Por favor, ingrese su número de celular" }]}
              >
                <Input placeholder="Celular" />
              </Form.Item>
              <Form.Item
                label="Mensaje"
                name="message"
                rules={[
                  { required: true, message: "Por favor, ingrese su mensaje" },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Mensaje" />
              </Form.Item>
              <div className="form-buttons">
                <Button type="primary" htmlType="submit" block>
                  Enviar Mensaje
                </Button>
                <Button type="default" block>
                  Llamar
                </Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyDetails;
