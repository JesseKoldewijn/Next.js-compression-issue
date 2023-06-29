const Count = async ({
	params,
}: {
	params: {
		count: string;
	};
}) => {
	const count = params.count;

	return (
		<div>
			<h1>count: {count}</h1>
		</div>
	);
};
export default Count;
