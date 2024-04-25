import { Column, Hr, Row, Text } from "@react-email/components";

export default function PriceItem({
                                      title,
                                      price,
                                  }: {
    title: string;
    price: number;
}) {
    return (
        <>
            <Row>
                <Column style={{ paddingLeft: "22px" }}>
                    <Text style={productTitle}>{title}</Text>
                </Column>

                <Column style={productPriceWrapper} align="right">
                    <Text style={productPrice}>${price.toFixed(2)}</Text>
                </Column>
            </Row>
            <Hr style={serviceSeparateLine} />
        </>
    );
}

const resetText = {
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
};
const productTitle = { fontSize: "16px", fontWeight: "400", ...resetText };
const productPriceWrapper = {
    display: "table-cell",
    padding: "0px 20px 0px 0px",
    width: "100px",
    verticalAlign: "top",
};
const productPrice = {
    fontSize: "16px",
    fontWeight: "600",
    margin: "0",
    color: "#4da03e",
};
const serviceSeparateLine = { margin: "8px 0" };
