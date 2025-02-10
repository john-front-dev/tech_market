import { Icon, Typography } from "@/shared/ui";
import { FC, useState } from "react";

interface IProfileProps {
  close(): void;
}

type phoneNumber = string;

const Profile: FC<IProfileProps> = ({ close }) => {
  const [isHover, setIsHover] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<phoneNumber>("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(phoneNumber);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-[360px] h-[380px] rounded-lg p-5">
        <div className="flex justify-between">
          <Typography size="text-l" weight="semibold">
            Регистрация
          </Typography>
          <div
            onClick={close}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            aria-label="Close"
            role="button"
            className="cursor-pointer"
          >
            <Icon name="exit" color={isHover ? "#3DD3CA" : "#73787D"} />
          </div>
        </div>
        <form
          onSubmit={submit}
          className="flex flex-col justify-center items-center mt-[44px]"
        >
          <Typography weight="bold">Введите номер телефона</Typography>
          <Typography
            size="text-xs"
            weight="semibold"
            className="text-center px-4 mt-3 mb-6"
          >
            Мы отправим вам СМС с кодом для подтверждения
          </Typography>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="px-4 py-3 w-full border border-alabaster-200 rounded-lg"
            type="text"
            placeholder="Номер телефона"
          />
          <button
            disabled={phoneNumber.length !== 9}
            type="submit"
            className="bg-main disabled:bg-alabaster-200 disabled:cursor-not-allowed w-full rounded-lg py-4 mt-10"
          >
            <Typography weight="bold">Получить код</Typography>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;