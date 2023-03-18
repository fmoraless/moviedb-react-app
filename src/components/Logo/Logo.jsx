import { LogoContainer, LogoImg, LogoTitle, LogoSubtitle } from './StyledLogo'
//import s from './style.module.css'

/* Con modulo de estilos */
/* const Logo = ({ image, title, subtitle }) => (
	<div>
		<div className={s.container}>
			<img className={s.img} src={image} alt='logo' />
			<span className={s.title}>{title}</span>
		</div>
		<span className={s.subtitle}>{subtitle}</span>
	</div>
) */

/* Con Styled Components */
const Logo = ({ image, title, subtitle }) => (
	<div>
		<LogoContainer>
			<LogoImg src={image} alt='logo' />
			<LogoTitle>{title}</LogoTitle>
		</LogoContainer>
		<LogoSubtitle>{subtitle}</LogoSubtitle>
	</div>
)

export default Logo
