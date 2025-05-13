# modules/load_balancer/variables.tf
variable "quantidade_nos" {
  description = "Quantidade de nós no Load Balancer"
  type        = number
  default     = 3
}
