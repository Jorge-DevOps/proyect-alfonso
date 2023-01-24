import { Button, Box, Typography, TextField, Divider, } from "@mui/material"
import FormErrorMessage from "./main/FormErrorMessage"
import { SchemaForm, InitialValue } from "./main/schema/SchemaForm"
import { Formik, Form } from "formik"
import TextareaAutosize from '@mui/base/TextareaAutosize';

import "./style.sass"

type Props = {
	onSubmit: (values: any) => void
}

export const FormContact = ({ onSubmit }: Props) => {

	return (
		<Box sx={{ p: "16px 20px" }}>

			<Formik
				enableReinitialize={false}
				initialValues={InitialValue}
				validationSchema={SchemaForm}
				onSubmit={(values) => { onSubmit(values) }}
			>
				{({ values, errors, handleChange, handleSubmit, handleBlur, touched }) => (
					<Form
						onSubmit={(e) => {
							e.preventDefault()
							handleSubmit(e)
						}}
					>
						<>
							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "0 0 5px" }}
							>
								Nombre completo
							</Typography>
							<TextField
								fullWidth
								name="name"
								autoComplete="off"
								type="text"
								inputProps={{ maxLength: 155 }}
								onChange={handleChange}
								value={values.name}
								size="small"
								helperText=""
							/>
							<FormErrorMessage nameField={"name"} error={errors} touched={touched} />
							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Correo electrónico
							</Typography>
							<TextField
								fullWidth
								name="email"
								autoComplete="off"
								type="text"
								inputProps={{ maxLength: 155 }}
								placeholder={"correo@gmail.com"}
								onChange={handleChange}
								value={values.email}
								size="small"
								helperText=""
							/>
							<FormErrorMessage nameField={"email"} error={errors} touched={touched} />

							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Número telefónico
							</Typography>
							<TextField
								fullWidth
								name="phone"
								type="text"
								autoComplete="off"
								inputProps={{ maxLength: 155 }}
								onChange={handleChange}
								value={values.phone}
								size="small"
							/>
							<FormErrorMessage nameField={"phone"} error={errors} touched={touched} />

							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Asunto
							</Typography>

							<TextareaAutosize
								maxRows={4}
								aria-label="maximum height"
								placeholder="Maximum 4 rows"
								defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."

								style={{ width: " 100%", resize: "none", padding: "10px", height: "100px" }}
							/>

							<Divider />
							<Box
								component="div"
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "flex-end",
								}}
							>
								<Button
									type="submit"
									variant="contained"
									sx={{
										mt: 3,
										mb: 2,
										backgroundImage: "-webkit-linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5)",
										padding: "8px 12px",
										textTransform: "none",
									}}
									className="buttonWithouColor"
								>
									Enviar
								</Button>

							</Box>
						</>
					</Form>
				)}
			</Formik>
		</Box>

	)
}



