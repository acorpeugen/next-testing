import {zodResolver} from "@hookform/resolvers/zod";
import {useForm as useReactForm} from 'react-hook-form'

import type * as z from 'zod'

export const useForm = <Payload extends object, ServerActionReturnType extends object>
    (schema: z.Schema<Payload>, serverAction: (p: Payload) => Promise<ServerActionReturnType>) => {
    const form = useReactForm<Payload>({
        mode: 'onTouched',
        reValidateMode: 'onSubmit',
        resolver: zodResolver<z.Schema<Payload>>(schema),
    });

    const formSubmitHandler = async (payload: Payload) => {
        const response = await serverAction(payload)

        return response
    }


    return {
        ...form,
        formSubmitHandler
    }
}