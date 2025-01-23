import { RequestInterface } from "../hooks";
import { TokenInterface } from "../interfaces";

class RequestApi {
  private creatorToken = ({ accessToken, refreshToken }: TokenInterface) => {
    return { accessToken, refreshToken };
  };
  private creatorUrl = (
    url: string,
    baseUrl: string = import.meta.env.VITE_APP_URL as string
  ) => `${baseUrl}${url}`;

  getSliderItem(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<unknown, unknown> {
    return {
      method: "Get",
      header: this.creatorToken({ accessToken, refreshToken }),
      url: this.creatorUrl("/slider/admin"),
    };
  }

  getProducts(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<unknown, unknown> {
    return {
      method: "Get",
      header: this.creatorToken({ accessToken, refreshToken }),
      url: this.creatorUrl("/product/site"),
    };
  }

  createUser(): RequestInterface<unknown, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("/users"),
    };
  }

  loginUser(): RequestInterface<unknown, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("/auth/login"),
    };
  }
}

export default new RequestApi();
