"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";
import {useAppStore} from "@/stores/app-store";

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: 'First name can\'t be less than 2 characters'
    }),
    lastName: z.string(),
    email: z.string().email({
        message: 'Invalid email address'
    }),
    phone: z.string().min(10, {
        message: 'Invalid phone number'
    }),
    address1: z.string(),
    address2: z.string(),
    city: z.string(),
    postalCode: z.string(),
    additionalNotes: z.string().optional()
})

function ContactForm() {
    const state = useAppStore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: state,
    })

    console.log(state.lastName);

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className={'grid grid-cols-2 gap-2'}>
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John" {...field} onChange={(e) => {
                                        field.onChange(e.target.value)
                                        state.setFirstName(e.target.value)
                                    }}/>
                                </FormControl>
                            </FormItem>
                        )}/>
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Doe" {...field} onChange={(e) => {
                                        field.onChange(e.target.value)
                                        state.setLastName(e.target.value)
                                    }} />
                                </FormControl>
                            </FormItem>
                        )}/>
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="johndoe@example.com" {...field} onChange={(e) => {
                                    field.onChange(e.target.value)
                                    state.setEmail(e.target.value)
                                }}/>
                            </FormControl>
                        </FormItem>
                    )}/>

                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="123-456-7890" {...field} onChange={(e) => {
                                    field.onChange(e.target.value)
state.setPhone(e.target.value)
                                }} />
                            </FormControl>
                        </FormItem>
                    )}/>

                <FormField
                    control={form.control}
                    name="address1"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="123 Main St" {...field}  onChange={(e) => {
                                    field.onChange(e.target.value)
                                    state.setAddress1(e.target.value)
                                }} />
                            </FormControl>
                        </FormItem>
                    )}/>

                <FormField
                    control={form.control}
                    name="address2"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Suite/Unit/Townhouse</FormLabel>
                            <FormControl>
                                <Input placeholder="Apt 123" {...field}  onChange={(e) => {
                                    field.onChange(e.target.value)
                                    state.setAddress2(e.target.value)
                                }} />
                            </FormControl>
                        </FormItem>
                    )}/>

                <FormField
                    control={form.control}
                    name="city"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input placeholder="Toronto" {...field}  onChange={(e) => {
                                    field.onChange(e.target.value)
                                    state.setCity(e.target.value)
                                }}  />
                            </FormControl>
                        </FormItem>
                    )}/>

                <FormField
                    control={form.control}
                    name="postalCode"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                                <Input placeholder="12345" {...field}  onChange={(e) => {
                                    field.onChange(e.target.value)
                                    state.setPostalCode(e.target.value)
                                }}  />

                            </FormControl>
                        </FormItem>
                    )}/>

                <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Please Include Details Here</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Buzz number, parking, accessibility, and other relevant details" {...field}  onChange={(e) => {
                                    field.onChange(e.target.value)
                                    state.setAdditionalInfo(e.target.value)
                                }}  />
                            </FormControl>
                        </FormItem>
                    )}/>
            </form>
        </Form>
    )
}

export default ContactForm;