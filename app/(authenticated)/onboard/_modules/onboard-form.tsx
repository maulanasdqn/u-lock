"use client";

import { Button } from "@/components/ui/button";
import { InputText } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { useQueryState } from "nuqs";

export const OnboardForm = () => {
  const [step, setStep] = useQueryState("step", { defaultValue: "device" });
  const methods = useForm({
    mode: "all",
    defaultValues: {
      phoneType: "",
      imei: "",
      lastProvider: "",
      paymentMethod: "",
      accountNumber: "",
      accountHolder: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
        {step === "device" && (
          <>
            <h1 className="font-semibold text-2xl mb-6 text-sky-800">
              Mari Lengkapi data kamu
            </h1>

            <div className="flex flex-col gap-y-8">
              <InputText
                required
                label="Tipe Handphone"
                type="text"
                control={control}
                name="phoneType"
              />
              <InputText
                required
                label="IMEI"
                type="text"
                control={control}
                name="imei"
              />
              <InputText
                required
                label="Provider Terakhir"
                type="text"
                control={control}
                name="lastProvider"
              />
            </div>
            <Button
              type="button"
              onClick={() => setStep("payment")}
              disabled={!isValid}
            >
              Lanjut
            </Button>
          </>
        )}
        {step === "payment" && (
          <>
            <h1 className="font-semibold text-2xl mb-6 text-sky-800">
              Lengkapi cara kamu bayar
            </h1>
            <div className="flex flex-col gap-y-8">
              <InputText
                required
                label="Metode Pembayaran"
                type="text"
                control={control}
                name="paymentMethod"
              />
              <InputText
                required
                label="Nomor Rekening"
                type="text"
                control={control}
                name="accountNumber"
              />
              <InputText
                required
                label="Nama Pemegang Rekening"
                type="text"
                control={control}
                name="accountHolder"
              />
            </div>
            <Button disabled={!isValid}>Buka Sekarang</Button>
          </>
        )}
      </form>
    </FormProvider>
  );
};
