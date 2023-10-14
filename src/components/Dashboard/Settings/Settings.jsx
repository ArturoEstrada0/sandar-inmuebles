import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Divider,
  TextareaAutosize,
  InputAdornment,
  Autocomplete,
  Paper,
} from "@mui/material";
import {
  Email,
  Phone,
  Public,
  CloudUpload,
  CheckCircle,
  Add,
  Remove,
} from "@mui/icons-material";
import { message } from "antd";
import Dropzone from "react-dropzone";
import { CSSTransition } from "react-transition-group";

function Settings() {
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerButton, setBannerButton] = useState("");
  const [bannerText, setBannerText] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const [socialMedia, setSocialMedia] = useState([]);
  const [officeAddress, setOfficeAddress] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");
  

  const handleBannerImageChange = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      message.success(`${acceptedFiles[0].name} file uploaded successfully`);
      setBannerImage(URL.createObjectURL(acceptedFiles[0]));
    } else {
      message.error("File upload failed.");
    }
  };

  const handleBannerButtonChange = (e) => {
    setBannerButton(e.target.value);
  };

  const handleBannerTextChange = (e) => {
    setBannerText(e.target.value);
  };

  const handleContactEmailChange = (e) => {
    setContactEmail(e.target.value);
  };

  const handleContactPhoneChange = (e) => {
    setContactPhone(e.target.value);
  };

  const handleAboutUsChange = (e) => {
    setAboutUs(e.target.value);
  };

  const handleOfficeAddressChange = (e) => {
    setOfficeAddress(e.target.value);
  };

  const handleSeoTitleChange = (e) => {
    setSeoTitle(e.target.value);
  };

  const handleSeoKeywordsChange = (e) => {
    setSeoKeywords(e.target.value);
  };

  const handleSeoDescriptionChange = (e) => {
    setSeoDescription(e.target.value);
  };

  const handleAddSocialMedia = (newSocialMedia) => {
    setSocialMedia([...socialMedia, newSocialMedia]);
  };

  const handleRemoveSocialMedia = (index) => {
    const updatedSocialMedia = [...socialMedia];
    updatedSocialMedia.splice(index, 1);
    setSocialMedia(updatedSocialMedia);
  };

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para guardar esta información en la configuración
    // También podrías mostrar una notificación de éxito.
    message.success("Configuración guardada con éxito");
  };

  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: "16px" }}>
        Configuración de la Inmobiliaria
      </Typography>
      <Divider style={{ marginBottom: "32px" }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">
              <CloudUpload /> Configuración del Banner
            </Typography>
            <Dropzone onDrop={handleBannerImageChange}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="dropzone">
                  <input {...getInputProps()} />
                  {bannerImage ? (
                    <Grow in={!!bannerImage}>
                      <img
                        src={bannerImage}
                        alt="Banner"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grow>
                  ) : (
                    <div>
                      <p className="ant-upload-drag-icon">
                        <CloudUpload />
                      </p>
                      <p className="ant-upload-text">
                        Haz clic o arrastra una imagen para cargarla
                      </p>
                    </div>
                  )}
                </div>
              )}
            </Dropzone>
            <TextField
              fullWidth
              label="Texto del Banner"
              value={bannerText}
              onChange={handleBannerTextChange}
              variant="outlined"
              style={{ marginTop: "16px" }}
            />
            <TextField
              fullWidth
              label="Texto del Botón del Banner"
              value={bannerButton}
              onChange={handleBannerButtonChange}
              variant="outlined"
              style={{ marginTop: "16px" }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">
              <Email /> Configuración de Contacto
            </Typography>
            <TextField
              fullWidth
              label="Correo de Contacto"
              type="email"
              value={contactEmail}
              onChange={handleContactEmailChange}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              style={{ marginTop: "16px" }}
            />
            <TextField
              fullWidth
              label="Teléfono de Contacto"
              type="tel"
              value={contactPhone}
              onChange={handleContactPhoneChange}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
              style={{ marginTop: "16px" }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">
              <Public /> Configuración de Nosotros
            </Typography>
            <TextareaAutosize
              minRows={4}
              maxRows={8}
              placeholder="Escribe aquí la información sobre nosotros"
              value={aboutUs}
              onChange={handleAboutUsChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                marginTop: "16px",
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">
              <Public /> Redes Sociales
            </Typography>
            <Autocomplete
              multiple
              id="socialMedia"
              options={["Facebook", "Twitter", "Instagram", "LinkedIn"]}
              value={socialMedia}
              onChange={(event, newValue) => {
                setSocialMedia(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Enlaces a Redes Sociales"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Public />
                      </InputAdornment>
                    ),
                  }}
                  style={{ marginTop: "16px" }}
                />
              )}
            />
            <ul style={{ marginTop: "16px" }}>
              {socialMedia.map((item, index) => (
                <li key={index}>
                  {item}{" "}
                  <Button
                    color="error"
                    size="small"
                    onClick={() => handleRemoveSocialMedia(index)}
                    startIcon={<Remove />}
                  />
                </li>
              ))}
            </ul>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleAddSocialMedia("Nueva Red Social")}
              startIcon={<Add />}
              style={{ marginTop: "16px" }}
            >
              Agregar Red Social
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">
              <Public /> Dirección de la Oficina
            </Typography>
            <TextField
              fullWidth
              label="Dirección de la Oficina"
              value={officeAddress}
              onChange={handleOfficeAddressChange}
              variant="outlined"
              style={{ marginTop: "16px" }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">
              <Public /> Configuración de SEO
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Título SEO"
            value={seoTitle}
            onChange={handleSeoTitleChange}
            variant="outlined"
            style={{ marginTop: "16px" }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            label="Descripción SEO"
            value={seoDescription}
            onChange={handleSeoDescriptionChange}
            variant="outlined"
            multiline
            rows={4}
            style={{ marginTop: "16px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Palabras Clave SEO"
            value={seoKeywords}
            onChange={handleSeoKeywordsChange}
            variant="outlined"
            style={{ marginTop: "16px" }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ marginTop: 2 }}
            startIcon={<CheckCircle />}
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Settings;
