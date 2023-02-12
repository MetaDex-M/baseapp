import React from 'react';

interface IconProps {
	className?: string;
	active?: boolean;
}

export const HomeIcon: React.FC<IconProps> = ({ className, active }) => {
	const color = active ? '#FFB800' : '#fff';

	return (
		<svg width="22" height="20" viewBox="0 0 22 20" fill={color} xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M15.4716 7.77042L14.8752 8.21398C15.743 9.86205 15.9738 11.7729 15.5235 13.5808C15.0731 15.3888 13.9732 16.9668 12.4343 18.0129C10.8954 19.059 9.02551 19.4997 7.1826 19.2506C5.33968 19.0015 3.65315 18.0802 2.44578 16.663C1.23841 15.2457 0.595016 13.4321 0.638724 11.5692C0.682432 9.70633 1.41018 7.92501 2.68268 6.56619C3.95518 5.20737 5.68306 4.36649 7.53562 4.20449C9.38817 4.04248 11.2353 4.57073 12.7234 5.68814L13.1968 5.12444C11.5687 3.90056 9.54652 3.32314 7.51917 3.50325C5.49181 3.68337 3.60251 4.60829 2.2147 6.10011C0.826877 7.59193 0.0385588 9.54528 0.00137761 11.5844C-0.0358036 13.6236 0.680778 15.6045 2.01329 17.1461C3.34579 18.6877 5.20011 19.6812 7.21955 19.9354C9.23898 20.1896 11.2809 19.6866 12.9525 18.5231C14.6242 17.3596 15.8074 15.6179 16.2747 13.6329C16.742 11.6479 16.4604 9.55985 15.4839 7.77042H15.4716ZM14.9398 6.9295C14.6472 6.51848 14.318 6.13494 13.9561 5.78363L13.4581 6.32576C13.7982 6.65123 14.107 7.00806 14.3803 7.39154L14.9398 6.9295Z"
				fill={color}
			/>
			<path
				d="M13.0185 16.2168C12.8987 16.3369 12.7757 16.4509 12.6466 16.5618C12.5175 16.6727 12.4591 16.722 12.3607 16.7959C12.2156 16.9065 12.0648 17.0093 11.9088 17.1039C11.7982 17.1779 11.6844 17.2456 11.5645 17.3134C11.3832 17.415 11.1957 17.5105 11.002 17.5968C10.8606 17.6615 10.7161 17.7169 10.5716 17.7693C10.3095 17.8645 10.0415 17.9427 9.76932 18.0034C9.29305 18.1102 8.80645 18.1639 8.31839 18.1636C8.05222 18.1643 7.78628 18.1478 7.52223 18.1143C6.95246 18.0474 6.39418 17.9045 5.86227 17.6892C4.85526 17.2821 3.96182 16.6362 3.2586 15.8071C3.12334 15.647 2.99731 15.4837 2.87742 15.3143C2.66922 15.0121 2.48523 14.6938 2.32718 14.3625C2.22002 14.1373 2.1266 13.9059 2.04744 13.6694C1.96057 13.4308 1.8887 13.187 1.83226 12.9394C1.78559 12.7362 1.75069 12.5305 1.72775 12.3233C1.69587 12.0606 1.67944 11.7963 1.67856 11.5317C1.67856 11.4547 1.67856 11.3746 1.67856 11.2976C1.67952 11.138 1.68978 10.9785 1.7093 10.8201C1.7093 10.7123 1.7339 10.6045 1.74927 10.5121C1.76464 10.4197 1.8046 10.2041 1.83841 10.0624C1.87222 9.92069 1.88145 9.8714 1.90911 9.77591C1.94908 9.62806 1.99518 9.48328 2.04744 9.33851C2.07567 9.24958 2.1085 9.16219 2.14581 9.07669C2.20114 8.92883 2.2657 8.78714 2.33025 8.64852C2.1827 8.61156 2.02285 8.57768 1.8753 8.54688C1.80625 8.68725 1.74469 8.8312 1.69086 8.97812L1.59864 9.22454C1.54946 9.36931 1.50642 9.51409 1.46339 9.66194C1.43879 9.75127 1.4142 9.8406 1.39576 9.92993C1.36194 10.0809 1.3312 10.238 1.30661 10.3796C1.28817 10.4782 1.27587 10.5768 1.26358 10.6877C1.24513 10.8417 1.23283 10.9957 1.22361 11.1528C1.21439 11.3099 1.22361 11.4208 1.22361 11.5563C1.22361 11.6919 1.22361 11.8644 1.22361 12.003C1.22361 12.2093 1.25743 12.4157 1.28817 12.619C1.43167 13.5708 1.7663 14.4835 2.27185 15.302C2.37944 15.4745 2.49625 15.6408 2.61613 15.804C3.18136 16.5649 3.89269 17.2048 4.7083 17.6862C5.52391 18.1676 6.42734 18.4807 7.36546 18.6071C7.67109 18.6487 7.97921 18.6693 8.28765 18.6687C8.4598 18.6687 8.62272 18.6687 8.78872 18.6502C9.38099 18.6101 9.96569 18.4941 10.5286 18.3052C10.7438 18.2313 10.9528 18.1512 11.1588 18.0619C11.294 18.0003 11.4231 17.9356 11.5553 17.8709C11.6875 17.8062 11.8873 17.6861 12.0472 17.5845C12.1609 17.5167 12.2716 17.4397 12.3791 17.3658C12.4867 17.2918 12.6589 17.1563 12.7911 17.0577C12.9232 16.9592 12.9816 16.8976 13.0739 16.8113C13.1661 16.7251 13.3136 16.5834 13.4243 16.4663C13.3106 16.3462 13.163 16.2784 13.0185 16.2168Z"
				fill={color}
			/>
			<path
				d="M13.4581 16.42C13.3474 16.5371 13.2306 16.6541 13.1077 16.765C12.9509 16.6911 12.8003 16.6202 12.6466 16.5617C12.1981 16.3802 11.738 16.229 11.2694 16.1089L10.7653 15.9826L10.4579 15.9118H10.3964L9.89535 15.7947C9.17167 15.6586 8.4821 15.3802 7.86651 14.9753C7.27703 14.5449 6.83641 13.9408 6.60617 13.2473L6.5324 13.0625C6.49243 12.967 6.45555 12.8715 6.41559 12.7729C6.41559 12.7545 6.41558 12.7329 6.39099 12.7144C6.33259 12.5727 6.27111 12.431 6.2004 12.2801C5.88016 11.6087 5.46614 10.9864 4.97081 10.4319C4.39597 9.77581 3.36003 9.34457 2.16732 9.06118C2.0167 9.02422 1.85992 8.99342 1.71237 8.96261C1.7662 8.8157 1.82777 8.67175 1.89681 8.53137C2.05051 8.56218 2.20421 8.59606 2.35176 8.63302C3.58136 8.94105 4.68493 9.41234 5.31509 10.127C5.87763 10.751 6.34201 11.4573 6.69224 12.2216C6.76294 12.3787 6.8275 12.5296 6.88283 12.6713L6.93816 12.8068C6.93816 12.8315 6.95968 12.8561 6.9689 12.8838C7.03038 13.0378 7.08879 13.1919 7.15027 13.3212C7.3505 13.8357 7.69809 14.2794 8.14932 14.5965C8.58298 14.8885 9.06484 15.1013 9.57258 15.2249C9.77546 15.2834 9.98449 15.3327 10.1874 15.385L10.4671 15.4497L10.5593 15.4713L11.1034 15.6006C11.7477 15.7524 12.3781 15.9585 12.9878 16.2167C13.163 16.2783 13.3106 16.3461 13.4581 16.42Z"
				fill={color}
			/>
			<path
				d="M12.8249 17.0116C12.6927 17.1194 12.5544 17.2272 12.413 17.3196C12.2439 17.2395 12.0748 17.1687 11.9088 17.104C11.5118 16.9507 11.1064 16.8201 10.6946 16.7128C10.5255 16.6697 10.3564 16.6265 10.1935 16.5896L9.79391 16.4941C8.81637 16.2692 7.97717 16.0752 7.26093 15.57C6.98164 15.371 6.73572 15.1287 6.5324 14.8523C6.49373 14.8037 6.45879 14.7522 6.42788 14.6983C6.22545 14.3695 6.05753 14.0206 5.92682 13.6571C5.87456 13.5308 5.82538 13.4015 5.77004 13.269C5.71471 13.1366 5.66553 13.0257 5.60405 12.8994C5.5951 12.8752 5.58484 12.8516 5.57331 12.8285C5.51798 12.7176 5.45957 12.6037 5.39502 12.4835C5.09945 11.9612 4.74796 11.4726 4.34679 11.0266C3.83035 10.4413 2.94504 10.0316 1.90911 9.75132C1.76463 9.71128 1.60171 9.67432 1.46338 9.63735C1.50641 9.4895 1.54945 9.32932 1.59863 9.19995L2.04744 9.31392C3.15715 9.62195 4.11624 10.0717 4.69107 10.7247C5.1312 11.2175 5.51382 11.7591 5.83153 12.3388C5.91145 12.4866 5.97908 12.6252 6.04056 12.7608C6.11433 12.9209 6.17889 13.0688 6.23729 13.2167C6.27418 13.3029 6.30799 13.3892 6.34181 13.4723C6.62154 14.1746 6.82135 14.6798 7.51915 15.185C8.15854 15.6501 8.95778 15.8349 9.88305 16.0505L10.0152 16.0813L10.5532 16.2076L10.8206 16.2754L11.3094 16.414C11.6621 16.5208 12.0089 16.6463 12.3484 16.7898C12.5144 16.8606 12.6681 16.9438 12.8249 17.0116Z"
				fill={color}
			/>
			<path
				d="M12.081 17.5598C11.9211 17.6614 11.7551 17.7539 11.5892 17.8463C11.3893 17.76 11.1957 17.683 11.002 17.6183C10.408 17.4157 9.80235 17.249 9.18836 17.1193C8.2139 16.8945 7.3747 16.7004 6.65846 16.1798C6.5511 16.1007 6.44846 16.0153 6.35106 15.9242C6.28277 15.8644 6.2181 15.8006 6.1574 15.7332C6.07749 15.6491 6.00353 15.5596 5.93607 15.4652C5.86537 15.3697 5.80389 15.2742 5.74549 15.1787C5.69555 15.0941 5.65039 15.0066 5.61023 14.9169C5.51494 14.7259 5.43501 14.5288 5.35201 14.3255L5.3305 14.267C5.22905 14.0144 5.12454 13.7495 4.98621 13.4661C4.92473 13.3367 4.85403 13.1981 4.7741 13.0564C4.48689 12.5506 4.14573 12.0776 3.75661 11.6456C3.20469 11.0864 2.51556 10.6827 1.75851 10.4751L1.31586 10.3427C1.34045 10.1917 1.37119 10.0346 1.405 9.89294C1.55563 9.93299 1.7124 9.97919 1.84766 10.0254C2.69763 10.2484 3.47315 10.6938 4.09475 11.316C4.5254 11.7971 4.90073 12.325 5.21368 12.8901C5.29361 13.0348 5.36431 13.1796 5.42886 13.3152C5.55797 13.5862 5.65941 13.8388 5.73626 14.0698C5.80082 14.23 5.8623 14.3779 5.92685 14.5257C6.01021 14.7293 6.11316 14.9243 6.23425 15.1079C6.27729 15.1664 6.3234 15.228 6.37258 15.2865C6.42176 15.3451 6.45558 15.382 6.49861 15.4313C6.60749 15.5416 6.72353 15.6445 6.84598 15.7393L6.90131 15.7794C7.54377 16.2445 8.34301 16.4293 9.26829 16.6449C9.57569 16.7158 9.88308 16.7897 10.2304 16.8791C10.3903 16.9191 10.5378 16.9653 10.7161 17.0177C10.9836 17.1008 11.2602 17.1932 11.54 17.3072C11.7244 17.3904 11.9088 17.4643 12.081 17.5598Z"
				fill={color}
			/>
			<path
				d="M11.1926 18.0248C10.9866 18.1141 10.7776 18.1942 10.5624 18.2682C10.2919 18.1696 10.0276 18.0833 9.76933 18.0125C9.35742 17.8924 8.96087 17.8 8.58585 17.7045C7.61139 17.4796 6.77219 17.2825 6.05594 16.7619C5.72421 16.531 5.44113 16.2369 5.22289 15.8963C5.12593 15.7482 5.04063 15.5927 4.96775 15.4312C4.88168 15.2495 4.8079 15.0677 4.72798 14.8737C4.72878 14.8655 4.72878 14.8572 4.72798 14.849C4.68187 14.7289 4.62961 14.6026 4.57428 14.4702C4.48821 14.2607 4.38984 14.042 4.26688 13.8079C3.96104 13.2388 3.5885 12.7083 3.15716 12.2277C2.74888 11.8035 2.24954 11.478 1.69702 11.2759C1.55254 11.2143 1.38962 11.1619 1.24207 11.1065C1.24207 10.9525 1.26358 10.7985 1.28203 10.6414C1.43265 10.6906 1.58943 10.743 1.72776 10.7985C2.39931 11.0276 3.00714 11.4129 3.50145 11.9228C4.09056 12.5735 4.57115 13.315 4.92471 14.119C5.01079 14.3161 5.08456 14.504 5.15526 14.6796L5.17678 14.7289C5.21982 14.8398 5.25978 14.9414 5.30589 15.0369C5.36035 15.1731 5.42296 15.3057 5.4934 15.4343L5.5764 15.5821C5.64478 15.6894 5.71973 15.7922 5.8008 15.8902C5.95677 16.0752 6.13545 16.2398 6.3326 16.3799C6.972 16.842 7.77124 17.0299 8.69958 17.2424C9.33581 17.3784 9.9639 17.5501 10.5809 17.7568C10.7745 17.8677 10.9805 17.9324 11.1926 18.0248Z"
				fill={color}
			/>
			<path
				d="M5.16757 14.7382C4.96469 14.6581 4.76488 14.5688 4.55277 14.4795C3.60537 14.034 2.69197 13.5192 1.81999 12.9393C1.63862 12.8192 1.46033 12.6991 1.28819 12.5789C1.25745 12.3756 1.23593 12.1693 1.22363 11.9629L1.72777 12.3233C2.53723 12.8804 3.38235 13.3835 4.25767 13.8295C4.47285 13.9374 4.6911 14.0452 4.9155 14.1376C5.00157 14.3347 5.07535 14.5226 5.14605 14.6982L5.16757 14.7382Z"
				fill={color}
			/>
			<path
				d="M5.57642 15.5977C5.37353 15.5484 5.17372 15.496 4.98006 15.4406C4.76488 15.379 4.55892 15.3143 4.36526 15.2434H4.33452C3.65074 15.008 2.98586 14.7207 2.34565 14.384C2.11817 14.2639 1.90299 14.1438 1.69396 14.0206C1.60971 13.7944 1.53687 13.5641 1.47571 13.3306C1.6663 13.4538 1.85996 13.5739 2.06591 13.691C2.91573 14.1879 3.81648 14.5917 4.75259 14.8954C4.9401 14.957 5.12761 15.0124 5.32128 15.0648C5.37573 15.2009 5.43835 15.3336 5.50879 15.4621L5.57642 15.5977Z"
				fill={color}
			/>
			<path
				d="M5.79158 15.9118C5.59792 15.9118 5.40733 15.9118 5.22289 15.9118H4.71568L4.14699 15.8903C3.83959 15.8749 3.53219 15.8564 3.25553 15.8348C3.04035 15.8348 2.83132 15.804 2.64073 15.7855C2.52085 15.6223 2.40404 15.4559 2.29645 15.2834L2.88358 15.342C3.20942 15.3697 3.55371 15.3943 3.91952 15.4159L4.43595 15.4405C4.61116 15.4405 4.78946 15.4405 4.97697 15.459C5.14297 15.459 5.31511 15.459 5.49033 15.459L5.57332 15.6069C5.63982 15.7129 5.71271 15.8147 5.79158 15.9118Z"
				fill={color}
			/>
			<path
				d="M11.1342 15.6007L10.5901 15.4713C10.2686 14.6925 9.76204 14.0041 9.11457 13.4661C8.49134 12.9295 7.69198 12.6432 6.87055 12.6621C6.81522 12.5204 6.75066 12.3541 6.67996 12.2124C7.17182 12.1757 7.66607 12.2366 8.13445 12.3914C8.60284 12.5463 9.03617 12.7921 9.40967 13.1149C10.2023 13.7683 10.7991 14.6286 11.1342 15.6007Z"
				fill={color}
			/>
			<path
				d="M10.2181 15.3851C9.99989 15.3327 9.79086 15.2834 9.60335 15.2249C9.31209 14.7715 8.9546 14.3645 8.54282 14.0174C8.14373 13.6744 7.66827 13.4325 7.15644 13.312C7.09496 13.1734 7.03656 13.0286 6.97508 12.8746C6.97508 12.8469 6.95356 12.8222 6.94434 12.7976C7.64528 12.9023 8.30204 13.2046 8.83792 13.6693C9.40341 14.1474 9.87197 14.7298 10.2181 15.3851Z"
				fill={color}
			/>
			<path
				d="M8.81948 18.6132C8.65348 18.6132 8.49056 18.6316 8.31841 18.6316C8.00997 18.6322 7.70185 18.6116 7.39622 18.57C6.85625 18.3314 6.34137 18.0393 5.85922 17.6983C5.17132 17.2115 4.58889 16.5901 4.147 15.8717L4.71569 15.8933C5.43606 16.8716 6.40234 17.6411 7.5161 18.1234C7.93865 18.3168 8.37417 18.4805 8.81948 18.6132Z"
				fill={color}
			/>
			<path
				d="M7.95871 11.9598L7.62979 11.6517L17.233 0.196132C17.2787 0.139574 17.3356 0.0931287 17.4002 0.059728C17.4647 0.0263274 17.5355 0.00669637 17.608 0.00207379C17.6806 -0.00432372 17.7537 0.00411762 17.8229 0.0268858C17.8921 0.049654 17.956 0.0862746 18.0107 0.134526C18.0651 0.182831 18.1094 0.241456 18.141 0.307014C18.1727 0.372572 18.1911 0.443766 18.1951 0.516483C18.2002 0.591031 18.1899 0.665826 18.1651 0.736275C18.1403 0.806725 18.1013 0.871343 18.0506 0.926162L7.95871 11.9598Z"
				fill={color}
			/>
			<path
				d="M8.8625 12.3541L8.59506 12.0152L20.1871 2.55874C20.2432 2.51242 20.3081 2.47792 20.3778 2.45728C20.4475 2.43664 20.5206 2.43029 20.5929 2.43861C20.6651 2.44657 20.735 2.46896 20.7985 2.50444C20.862 2.53993 20.9177 2.5878 20.9624 2.64523C21.0071 2.70265 21.0399 2.76847 21.0587 2.83879C21.0776 2.90911 21.0823 2.98251 21.0724 3.05466C21.0625 3.12655 21.0383 3.19573 21.0014 3.25814C20.9644 3.32056 20.9154 3.37495 20.8572 3.41814L8.8625 12.3541ZM20.5437 2.73123L20.6943 3.18404L20.5437 2.73123Z"
				fill={color}
			/>
		</svg>
	);
};
