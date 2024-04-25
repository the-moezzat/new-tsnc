// 'use client'
import {
    Body,
    Column,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import PriceItem from "./price-item";

interface EmailProps {
    fullName: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    city: string;
    postalCode: string;
    date: string;
    time: string;
    services: {
        name: string;
        price: number;
        count: number;
        addon: {
            name: string;
            price: number;
            count: number;
        }[];
    }[];
    rugs: {
        name: string;
        length: number;
        width: number;
        unit: string;
        sizeInFt: string;
        price: number;
        addOns: {
            name: string;
            price: number;
        }[];
    }[];
    additionalInfo: string;
    priceDetails: {
        totalPrice: number;
        fees: number;
        priceWithoutFees: number;
        carpetUpholsteryPrices: {
            totalPrice: number;
            priceWithoutAddons: number;
            addonsPrice: number
        };
        rugPrice: {
            totalPrice: number;
            priceWithoutAddons: number;
            addonsPrice: number
        }
    }
}

export default function Email({
                                  fullName,
                                  email,
                                  phone,
                                  address1,
                                  address2,
                                  city,
                                  postalCode,
                                  date,
                                  time,
                                  services,
                                  rugs,
                                  additionalInfo,
                                  priceDetails
                              }: EmailProps) {

    //
    // const {
    //     fullName,
    //     email,
    //     phone,
    //     address1,
    //     address2,
    //     city,
    //     postalCode,
    //     date,
    //     time,
    //     services,
    //     rugs,
    //     additionalInfo,
    //     priceDetails
    // } = {
    //     fullName: 'Mohamed Ezzat',
    //     email: 'dev.moezzat@gmail.com',
    //     phone: '0123456789',
    //     address1: 'bla bla bla',
    //     address2: 'bla',
    //     city: 'Tornonto',
    //     postalCode: '12345',
    //     date: 'Monday, April 29, 2024',
    //     time: '9AM - 12PM',
    //     services: [
    //         { name: 'Standard Room', price: 50, count: 3, addon: [] },
    //         { name: 'Standard Stair Set', price: 50, count: 2, addon: [] },
    //         { name: 'King Size', price: 150, count: 1, addon: [] },
    //         {
    //             name: 'Headboard Cleaning - Queen Size  & Smaller',
    //             price: 75,
    //             count: 1,
    //             addon: []
    //         },
    //         { name: 'Chaise', price: 100, count: 1, addon: [] }
    //     ],
    //     rugs: [
    //         {
    //             id: 1714077518204,
    //             name: 'Handmade',
    //             price: 3.49,
    //             width: 4,
    //             length: 2,
    //             unit: 'ft',
    //             sizeInFt: '8.00',
    //             addOns: []
    //         },
    //         {
    //             id: 1714077527252,
    //             name: 'Silk',
    //             price: 4.29,
    //             width: 4,
    //             length: 2,
    //             unit: 'ft',
    //             sizeInFt: '8.00',
    //             addOns: []
    //         }
    //     ],
    //     additionalInfo: 'Bla bla bla bla bla blal bla',
    //     priceDetails: {
    //         totalPrice: 924.34,
    //         fees: 106.34,
    //         priceWithoutFees: 818,
    //         carpetUpholsteryPrices: { totalPrice: 649, priceWithoutAddons: 575, addonsPrice: 25 },
    //         rugPrice: { totalPrice: 169, priceWithoutAddons: 62.24, addonsPrice: 0 }
    //     }
    // }



    return (
        <Html>
            <Head/>
            <Preview>Toronto Steam n’ Clean </Preview>

            <Body style={main}>
                <Container style={container}>
                    {/* <User /> */}
                    <Section>
                        <Column>
                            <Img
                                src={`https://yarevgzplridbqfjfxjn.supabase.co/storage/v1/object/public/images/logo.png`}
                                height="54"
                                alt="Toronto steam 'n clean Logo"
                            />
                        </Column>
                        {/* <Column align="right" style={tableCell}>
            <Text style={heading}>Receipt</Text>
          </Column> */}
                    </Section>

                    <Section>
                        <Text style={heading}>Thank you!</Text>
                        <Text style={cupomText}>
                            We have received your request and will be in touch directly to
                            confirm your appointment and details. Please note this is email is
                            NOT a confirmation of booking.
                        </Text>
                    </Section>

                    <Section style={informationTable}>
                        <Row style={informationTableRow}>
                            <Column colSpan={2}>
                                <Row>
                                    <Column style={informationTableColumn}>
                                        <Text style={informationTableLabel}>Name</Text>
                                        <Text style={informationTableValue}>
                                            {fullName}
                                        </Text>
                                    </Column>
                                </Row>

                                <Row>
                                    <Column style={informationTableColumn}>
                                        <Text style={informationTableLabel}>Arrival Date</Text>
                                        <Text style={informationTableValue}>
                                            {date}
                                        </Text>
                                    </Column>
                                    <Column style={informationTableColumn}>
                                        <Text style={informationTableLabel}>Time</Text>
                                        <Text style={informationTableValue}>
                                            {time}
                                        </Text>
                                    </Column>
                                </Row>

                                <Row>
                                    <Column style={informationTableColumn}>
                                        <Text style={informationTableLabel}>Email</Text>
                                        <Link
                                            style={{
                                                ...informationTableValue,
                                                color: "#15c",
                                                textDecoration: "underline",
                                            }}
                                            href={`mailto:${email}`}
                                        >
                                            {email}
                                        </Link>
                                    </Column>
                                    <Column style={informationTableColumn}>
                                        <Text style={informationTableLabel}>Phone</Text>
                                        <Text style={informationTableValue}>{phone}</Text>
                                    </Column>
                                </Row>
                            </Column>
                            <Column style={informationTableColumn} colSpan={2}>
                                <Text style={informationTableLabel}>Address</Text>
                                <Text style={informationTableValue}>{address1}</Text>
                                {address2 && (
                                    <>
                                        <Text style={informationTableLabel}>
                                            Suite/Unit/Townhouse
                                        </Text>
                                        <Text style={informationTableValue}>{address2}</Text>
                                    </>
                                )}
                                <Text style={informationTableValue}>
                                    {city} {postalCode}
                                </Text>
                            </Column>
                        </Row>
                    </Section>

                    {additionalInfo && (
                        <Section style={details}>
                            <Text style={{...informationTableLabel, marginBottom: "6px"}}>
                                Details
                            </Text>
                            <Text style={informationTableValue}>
                                {" "}
                                - {additionalInfo} <br/>
                            </Text>
                        </Section>
                    )}


                    {services?.length > 0 && (
                        <Section>
                            <Section
                                style={{
                                    ...productTitleTable,
                                    backgroundColor: "#4da03e",
                                    color: "#fff",
                                }}
                            >
                                <Row>
                                    <Column>
                                        <Text
                                            style={{
                                                ...productsTitle,
                                                backgroundColor: "#4da03e",
                                                color: "#fff",
                                            }}
                                        >
                                            Carpet & Upholstery Cleaning
                                        </Text>
                                    </Column>
                                    <Column>
                                        <Text
                                            style={{
                                                ...productPriceTotal,
                                                fontSize: "16px",
                                                color: "#fff",
                                                textAlign: "right" as const,
                                            }}
                                        >
                                            Subtotal: $
                                            {priceDetails.carpetUpholsteryPrices.totalPrice.toFixed(2)}
                                        </Text>
                                    </Column>
                                </Row>
                            </Section>

                            <Section>
                                <Row>
                                    <Column style={{paddingLeft: "22px"}}>
                                        <Text style={productTitle}>Job Minimum</Text>
                                    </Column>

                                    <Column style={productPriceWrapper} align="right">
                                        <Text style={productPrice}>
                                            $
                                            {priceDetails.carpetUpholsteryPrices.priceWithoutAddons >= 150
                                                ? 49
                                                : 199 - priceDetails.carpetUpholsteryPrices.priceWithoutAddons}
                                        </Text>
                                    </Column>
                                </Row>
                                <Hr style={serviceSeparateLine}/>

                                {services.map((service) => (
                                    <>
                                        <Row>
                                            <Column style={{paddingLeft: "22px"}}>
                                                <Text style={productTitle}>
                                                    {service.count} x {service.name}
                                                </Text>
                                            </Column>

                                            <Column style={productPriceWrapper} align="right">
                                                <Text style={productPrice}>
                                                    ${(service.price * service.count).toFixed(2)}
                                                </Text>
                                            </Column>
                                        </Row>
                                        <Hr style={serviceSeparateLine}/>
                                        {service.addon.filter(addon => addon.count > 0).map((addon) => (
                                            <>
                                                <Row>
                                                    <Column style={{paddingLeft: "22px"}}>
                                                        <Text style={productTitle}>
                                                            {addon.count} x {addon.name} for {service.name}
                                                        </Text>
                                                    </Column>

                                                    <Column style={productPriceWrapper} align="right">
                                                        <Text style={productPrice}>
                                                            ${(addon.price * addon.count).toFixed(2)}
                                                        </Text>
                                                    </Column>
                                                </Row>
                                                <Hr style={serviceSeparateLine}/>
                                            </>
                                        ))}
                                    </>
                                ))}
                            </Section>
                        </Section>
                    )}

                    {rugs?.length > 0 && (
                        <Section>
                            <Section
                                style={{
                                    ...productTitleTable,
                                    backgroundColor: "#4da03e",
                                    color: "#fff",
                                }}
                            >
                                <Row>
                                    <Column>
                                        <Text
                                            style={{
                                                ...productsTitle,
                                                backgroundColor: "#4da03e",
                                                color: "#fff",
                                            }}
                                        >
                                            Rug Cleaning
                                        </Text>
                                    </Column>
                                    <Column>
                                        <Text
                                            style={{
                                                ...productPriceTotal,
                                                fontSize: "16px",
                                                color: "#fff",
                                                textAlign: "right" as const,
                                            }}
                                        >
                                            Subtotal: ${priceDetails.rugPrice.totalPrice}
                                        </Text>
                                    </Column>
                                </Row>
                            </Section>

                            <Section>
                                {priceDetails.rugPrice.priceWithoutAddons < 169 && (
                                    <PriceItem
                                        title="Job Minimum"
                                        price={169 - priceDetails.rugPrice.priceWithoutAddons}
                                    />
                                )}

                                {rugs.map((rug) => (
                                    <>
                                        <PriceItem
                                            title={`${rug.name} (${rug.length} * ${rug.width} ft)`}
                                            price={+(+rug.sizeInFt * rug.price).toFixed(2)}
                                        />
                                        {
                                            rug.addOns.map((addon) => (
                                                <PriceItem
                                                    key={addon.name}
                                                    title={`${addon.name} for ${rug.name}`}
                                                    price={+(addon.price * +rug.sizeInFt).toFixed(2)}
                                                />
                                            ))
                                        }
                                    </>
                                ))}
                            </Section>
                        </Section>
                    )}


                    <Hr style={productPriceLine}/>
                    <Section align="left">
                        <Row>
                            <Column style={tableCell} align="left">
                                <Text style={productPriceTotal}>Services and addons</Text>
                            </Column>
                            <Column style={productPriceLargeWrapper}>
                                <Text style={productPriceLarge}>
                                    ${priceDetails?.priceWithoutFees.toFixed(2)}
                                </Text>
                            </Column>
                        </Row>

                        {/*{promoCode && (*/}
                        {/*    <Row>*/}
                        {/*        <Column style={tableCell} align="left">*/}
                        {/*            <Text style={productPriceTotal}>*/}
                        {/*                {promoCode?.value_type === "Percentage"*/}
                        {/*                    ? `${promoCode?.value}% `*/}
                        {/*                    : `$${promoCode?.value}`}{" "}*/}
                        {/*            </Text>*/}
                        {/*        </Column>*/}
                        {/*        <Column style={productPriceLargeWrapper}>*/}
                        {/*            <Text style={productPriceLarge}>*/}
                        {/*                -$*/}
                        {/*                {(totalBeforeDiscount - totalPriceAfterDiscount).toFixed(2)}*/}
                        {/*            </Text>*/}
                        {/*        </Column>*/}
                        {/*    </Row>*/}
                        {/*)}*/}

                        <Row>
                            <Column style={tableCell} align="left">
                                <Text style={productPriceTotal}>13% HST</Text>
                            </Column>
                            {/* <Column style={productPriceVerticalLine}></Column> */}
                            <Column style={productPriceLargeWrapper}>
                                <Text style={productPriceLarge}>${priceDetails?.fees.toFixed(2)}</Text>
                            </Column>
                        </Row>

                        <Row>
                            <Column style={tableCell} align="left">
                                <Text style={productPriceTotal}>Grand Total</Text>
                            </Column>
                            <Column style={productPriceLargeWrapper}>
                                <Text style={productPriceLarge}>
                                    ${(priceDetails?.totalPrice)?.toFixed(2)}
                                </Text>
                            </Column>
                        </Row>
                    </Section>
                    <Hr style={productPriceLineBottom}/>

                    <Row align="center">
                        <Img
                            src={`https://yarevgzplridbqfjfxjn.supabase.co/storage/v1/object/public/images/how-to-prepare.png`}
                            alt="Toronto steam 'n clean Logo"
                            width={650}
                        />
                    </Row>
                    <Row align="center">
                        <a href="tel:+14167552528">
                            <Img
                                src={`https://yarevgzplridbqfjfxjn.supabase.co/storage/v1/object/public/images/forgot-something.png`}
                                alt="Toronto steam 'n clean Logo"
                                width={650}
                            />
                        </a>
                    </Row>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: "#ffffff",
};

const resetText = {
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "660px",
};

const tableCell = {display: "table-cell"};

const heading = {
    textAlign: "center" as const,
    fontSize: "32px",
    fontWeight: "500",
    color: "#111",
};

const cupomText = {
    textAlign: "center" as const,
    margin: "24px 0 40px 0",
    fontSize: "16px",
    fontWeight: "500",
    color: "#111111",
};

// const supStyle = {
//   fontWeight: "300",
// };

const informationTable = {
    borderCollapse: "collapse" as const,
    borderSpacing: "0px",
    color: "rgb(51,51,51)",
    backgroundColor: "rgb(250,250,250)",
    borderRadius: "3px",
    fontSize: "14px",
};

const informationTableRow = {
    height: "46px",
};

const informationTableColumn = {
    paddingLeft: "20px",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "0px 1px 1px 0px",
    height: "44px",
};

const informationTableLabel = {
    ...resetText,
    color: "rgb(102,102,102)",
    fontSize: "16px",
};

const informationTableValue = {
    fontSize: "18px",
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
};

const details = {
    backgroundColor: "#fafafa",
    padding: "14px",
    fontSize: "16px",
    borderRadius: "3px",
};

const productTitleTable = {
    ...informationTable,
    margin: "30px 0 15px 0",
    height: "24px",
    backgroundColor: "#4da03e",
    color: "#fff",
};

const productsTitle = {
    background: "#fafafa",
    paddingLeft: "10px",
    fontSize: "16px",
    fontWeight: "500",
    margin: "0",
};


const productTitle = {fontSize: "16px", fontWeight: "400", ...resetText};

const productPriceTotal = {
    margin: "0",
    color: "rgb(102,102,102)",
    fontSize: "18px",
    fontWeight: "600",
    padding: "0px 30px 0px 0px",
    // textAlign: "right" as const,
};

const productPrice = {
    fontSize: "16px",
    fontWeight: "600",
    margin: "0",
    color: "#4da03e",
};

const productPriceLarge = {
    margin: "0px 20px 0px 0px",
    fontSize: "18px",
    fontWeight: "600",
    whiteSpace: "nowrap" as const,
    textAlign: "right" as const,
    color: "#4da03e",
};

const productPriceWrapper = {
    display: "table-cell",
    padding: "0px 20px 0px 0px",
    width: "100px",
    verticalAlign: "top",
};

const productPriceLine = {margin: "30px 0 0 0"};

const serviceSeparateLine = {margin: "8px 0"};

const productPriceLargeWrapper = {display: "table-cell", width: "90px"};

const productPriceLineBottom = {margin: "0 0 75px 0"};