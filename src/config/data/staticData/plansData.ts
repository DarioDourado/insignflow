import { Plan } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function getPlansData(
  router: AppRouterInstance,
  t: (key: string) => string
): Plan[] {
  return [
    {
      name: t("plans_free_name"),
      description: t("plans_free_description"),
      price: t("plans_free_price"),
      features: [
        t("plans_free_feature_1"),
        t("plans_free_feature_2"),
        t("plans_free_feature_3"),
        t("plans_free_feature_4"),
      ],
      buttonText: t("plans_free_button"),
      buttonAction: () => router.push(`/login`),
    },
    {
      name: t("plans_premium_name"),
      description: t("plans_premium_description"),
      price: t("plans_premium_price"),
      features: [
        t("plans_premium_feature_1"),
        t("plans_premium_feature_2"),
        t("plans_premium_feature_3"),
        t("plans_premium_feature_4"),
      ],
      buttonText: t("plans_premium_button"),
      buttonAction: () => alert(t("plans_premium_payment_alert")),
    },
    {
      name: t("plans_diamond_name"),
      description: t("plans_diamond_description"),
      price: t("plans_diamond_price"),
      features: [
        t("plans_diamond_feature_1"),
        t("plans_diamond_feature_2"),
        t("plans_diamond_feature_3"),
        t("plans_diamond_feature_4"),
      ],
      buttonText: t("plans_diamond_button"),
      buttonAction: () => alert(t("plans_diamond_payment_alert")),
    },
  ];
}
