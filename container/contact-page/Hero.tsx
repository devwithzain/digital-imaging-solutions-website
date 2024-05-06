export default function Hero() {
	return (
		<section className="w-full padding-x py-10">
			<iframe
				loading="lazy"
				src="https://maps.google.com/maps?q=W24J%2B8Q%20Nazimabad%2C%20Karachi&amp;t=m&amp;z=18&amp;output=embed&amp;iwloc=near"
				title="W24J+8Q Nazimabad, Karachi"
				aria-label="W24J+8Q Nazimabad, Karachi"
				className="w-full h-[400px] border-none"
				allowFullScreen={true}
				referrerPolicy="no-referrer-when-downgrade"
			/>
			<div className="w-full flex flex-col gap-4 py-10">
				<h1 className="text-3xl text-black uppercase font-semibold">
					Digital Imaging Solutions
				</h1>
				<div className="flex flex-col gap-6">
					<div className="flex gap-2 items-center  sm:flex-col xm:flex-col sm:items-start xm:items-start">
						<h4 className="text-[18px] text-black leading-7 font-semibold">
							Address:
						</h4>
						<p className="text-[18px] text-black leading-7 font-normal">
							Suite# F-1, Building # II-A, 7/1, Nazimabad # 2, Commercial Area,
							Karachi – 74600, Pakistan.
						</p>
					</div>
					<div className="flex gap-2 items-center  sm:flex-col xm:flex-col sm:items-start xm:items-start">
						<h4 className="text-[18px] text-black leading-7 font-semibold">
							Email:
						</h4>
						<p className="text-[18px] text-black leading-7 font-normal">
							Rizwan@dis.com.pk
						</p>
					</div>
					<div className="flex gap-2 items-center  sm:flex-col xm:flex-col sm:items-start xm:items-start">
						<h4 className="text-[18px] text-black leading-7 font-semibold">
							Mobile:
						</h4>
						<p className="text-[18px] text-black leading-7 font-normal">
							+92 3002270154
						</p>
					</div>
					<div className="flex gap-2 items-center  sm:flex-col xm:flex-col sm:items-start xm:items-start">
						<h4 className="text-[18px] text-black leading-7 font-semibold">
							Telephone:
						</h4>
						<p className="text-[18px] text-black leading-7 font-normal">
							+9221 – 36729110
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
